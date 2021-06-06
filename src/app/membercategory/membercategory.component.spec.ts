import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembercategoryComponent } from './membercategory.component';

describe('MembercategoryComponent', () => {
  let component: MembercategoryComponent;
  let fixture: ComponentFixture<MembercategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembercategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembercategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
