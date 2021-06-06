import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindcardComponent } from './bindcard.component';

describe('BindcardComponent', () => {
  let component: BindcardComponent;
  let fixture: ComponentFixture<BindcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
