import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationsStatesWizardComponent } from './applications-states-wizard.component';

describe('ApplicationsStatesWizardComponent', () => {
  let component: ApplicationsStatesWizardComponent;
  let fixture: ComponentFixture<ApplicationsStatesWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationsStatesWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsStatesWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
