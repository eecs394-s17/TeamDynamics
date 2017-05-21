import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetBearFormComponent } from './bet-bear-form.component';

describe('BetBearFormComponent', () => {
  let component: BetBearFormComponent;
  let fixture: ComponentFixture<BetBearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetBearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetBearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
