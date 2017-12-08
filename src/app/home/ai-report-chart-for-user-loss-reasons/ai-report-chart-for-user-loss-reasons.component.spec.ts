import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AiReportChartForUserLossReasonsComponent } from './ai-report-chart-for-user-loss-reasons.component';

describe('AiReportChartForUserLossReasonsComponent', () => {
  let component: AiReportChartForUserLossReasonsComponent;
  let fixture: ComponentFixture<AiReportChartForUserLossReasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AiReportChartForUserLossReasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AiReportChartForUserLossReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
