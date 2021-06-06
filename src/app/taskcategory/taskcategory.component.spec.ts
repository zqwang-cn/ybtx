import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskcategoryComponent } from './taskcategory.component';

describe('TaskcategoryComponent', () => {
  let component: TaskcategoryComponent;
  let fixture: ComponentFixture<TaskcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
