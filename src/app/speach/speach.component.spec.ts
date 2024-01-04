import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeachComponent } from './speach.component';

describe('SpeachComponent', () => {
  let component: SpeachComponent;
  let fixture: ComponentFixture<SpeachComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeachComponent]
    });
    fixture = TestBed.createComponent(SpeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
