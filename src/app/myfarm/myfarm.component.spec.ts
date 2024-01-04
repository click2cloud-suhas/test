import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfarmComponent } from './myfarm.component';

describe('MyfarmComponent', () => {
  let component: MyfarmComponent;
  let fixture: ComponentFixture<MyfarmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyfarmComponent]
    });
    fixture = TestBed.createComponent(MyfarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
