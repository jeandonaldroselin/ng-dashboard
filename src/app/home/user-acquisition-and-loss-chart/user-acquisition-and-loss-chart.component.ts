import {Component, Input} from '@angular/core';
import {UserAcquisitionStatistic} from "../../../shared/model/userAcquisitionStatistic";

@Component({
  selector: 'app-user-acquisition-and-loss-chart',
  templateUrl: './user-acquisition-and-loss-chart.component.html',
  styleUrls: ['./user-acquisition-and-loss-chart.component.css']
})
export class UserAcquisitionAndLossChartComponent {
  
  @Input() data: UserAcquisitionStatistic;

}
