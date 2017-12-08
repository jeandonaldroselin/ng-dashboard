import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-ai-report-chart-for-user-loss-reasons',
  templateUrl: './ai-report-chart-for-user-loss-reasons.component.html',
  styleUrls: ['./ai-report-chart-for-user-loss-reasons.component.css']
})
export class AiReportChartForUserLossReasonsComponent {
  
  @Input() data: any;
  
  constructor() { }

}
