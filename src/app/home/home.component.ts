import {Component, Inject, OnInit} from '@angular/core';
import {UserAcquisitionStatistic} from "../../shared/model/userAcquisitionStatistic";
import {UserAcquisitionStatisticService} from "../../shared/services/userAcquisitionStatisticService";
import "rxjs/add/operator/delay";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userAcquisitionStatisticData: UserAcquisitionStatistic;
  
  constructor(@Inject('UserAcquisitionStatisticService') private userAcquisitionStatisticService: UserAcquisitionStatisticService) { }

  ngOnInit() {
    this.userAcquisitionStatisticService
      .get()
      .delay(2000)
      .subscribe((data)=>{
      this.userAcquisitionStatisticData = data;
    })
  }

}
