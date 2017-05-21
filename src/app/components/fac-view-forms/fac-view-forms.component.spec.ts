import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacViewFormsComponent } from './fac-view-forms.component';

describe('FacViewFormsComponent', () => {
  let component: FacViewFormsComponent;
  let fixture: ComponentFixture<FacViewFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacViewFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacViewFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
