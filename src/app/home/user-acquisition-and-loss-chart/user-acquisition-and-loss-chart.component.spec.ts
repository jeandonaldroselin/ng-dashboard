import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAcquisitionAndLossChartComponent } from './user-acquisition-and-loss-chart.component';

describe('UserAcquisitionAndLossChartComponent', () => {
  let component: UserAcquisitionAndLossChartComponent;
  let fixture: ComponentFixture<UserAcquisitionAndLossChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAcquisitionAndLossChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAcquisitionAndLossChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
