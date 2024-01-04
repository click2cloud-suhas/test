// dashboard.component.ts

import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

interface Subject {
  name: string;
  totalMarks: number;
  obtainedMarks: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  studentName: string = '';
  fatherName: string = '';
  motherName: string = '';
  selectedImage: File | null = null;
  selectedImageURL: string | ArrayBuffer | null | undefined = null;
  address: string = '';
  selectedSubject: string = '';
  totalMarks: number | null = null;
  obtainedMarks: number | null = null;

  subjects: Subject[] = [];
  availableSubjects: string[] = [
    'english', 'physics', 'mathematics', 'science', 'computerScience', 'civilEngi'
  ];

  onImageChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;

      // Read the image data and set it as the source for the img tag
      const reader = new FileReader();
      reader.onload = (e) => {
        this.selectedImageURL = e.target?.result;
      };
      reader.readAsDataURL(file);
    }
  }

  addSubject(): void {
    if (this.selectedSubject && this.totalMarks !== null && this.obtainedMarks !== null) {
      const subject: Subject = {
        name: this.selectedSubject,
        totalMarks: +this.totalMarks,
        obtainedMarks: +this.obtainedMarks
      };

      // Add the subject details to the subjects array
      this.subjects.push(subject);

      // Remove the added subject from the available subjects list
      this.availableSubjects = this.availableSubjects.filter(s => s !== subject.name);

      // Clear form inputs after adding a subject
      this.selectedSubject = '';
      this.totalMarks = null;
      this.obtainedMarks = null;
    }
  }

  getTotalMarks(): number {
    return this.subjects.reduce((total, subject) => total + subject.totalMarks, 0);
  }

  getObtainedMarks(): number {
    return this.subjects.reduce((total, subject) => total + subject.obtainedMarks, 0);
  }

  getPercentage(): number {
    const totalMarks = this.getTotalMarks();
    const obtainedMarks = this.getObtainedMarks();
    return (obtainedMarks / totalMarks) * 100;
  }

  getGrade(): string {
    const percentage = this.getPercentage();

    if (percentage >= 90) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B';
    } else if (percentage >= 70) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  downloadMarksheet(): void {
    const content = document.getElementById('marksheetContent');

    if (content) {
      html2canvas(content, { scale: 5, allowTaint: false }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('portrait', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('marksheet.pdf');
      });
    }
  }


  selectedClass: string = '';
  studentCards: any[] = []; // Replace 'any' with a specific type if needed
  availableClasses: string[] = ['1st standard', '2nd standard', '3rd standard', '4th standard', '5th standard'];


  submitStudentCard(): void {
    const studentCard = {
      studentName: this.studentName,
      fatherName: this.fatherName,
      motherName: this.motherName,
      selectedImageURL: this.selectedImageURL,
      address: this.address,
      subjects: this.subjects,
      totalMarks: this.getTotalMarks(),
      obtainedMarks: this.getObtainedMarks(),
      percentage: this.getPercentage(),
      grade: this.getGrade(),
      selectedClass: this.selectedClass,
    };

    this.studentCards.push(studentCard);

    // Clear form inputs after submitting a student card
    this.studentName = '';
    this.fatherName = '';
    this.motherName = '';
    this.selectedImage = null;
    this.selectedImageURL = null;
    this.address = '';
    this.subjects = [];
    this.availableSubjects = [
      'english', 'physics', 'mathematics', 'science', 'computerScience', 'civilEngi'
    ];
    this.selectedSubject = '';
    this.totalMarks = null;
    this.obtainedMarks = null;
    this.selectedClass = '';
  }



}
