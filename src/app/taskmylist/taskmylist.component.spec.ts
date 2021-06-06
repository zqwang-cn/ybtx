import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskmylistComponent } from './taskmylist.component';

describe('TaskmylistComponent', () => {
  let component: TaskmylistComponent;
  let fixture: ComponentFixture<TaskmylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskmylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskmylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
