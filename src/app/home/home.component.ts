import {Component, Inject, OnInit} from '@angular/core';
import {UserAcquisitionStatistic} from "../../shared/model/userAcquisitionStatistic";
import {UserAcquisitionStatisticService} from "../../shared/services/userAcquisitionStatisticService";
import "rxjs/add/operator/delay";
import {ApplicationStateService} from "../../shared/services/applicationStateService";
import {ApplicationState} from "../../shared/model/applicationState";
import {ApplicationRoadmapEventService} from "../../shared/services/applicationRoadmapEventService";
import {RoadmapEvent} from "../../shared/model/roadmapEvent";
import {UninstallationReasonsStatiscticService} from "../../shared/services/uninstallationReasonsStatiscticService";
import {UninstallationReasonsStatistic} from "../../shared/model/uninstallationStatistic";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  userAcquisitionStatisticData: UserAcquisitionStatistic;
  
  applicationStateData: ApplicationState;
  
  applicationRoadmapEventData: Array<RoadmapEvent>;
  
  uninstallationReasonsData: UninstallationReasonsStatistic;
  
  constructor(@Inject('UserAcquisitionStatisticService') private userAcquisitionStatisticService: UserAcquisitionStatisticService,
              @Inject('ApplicationStateService') private applicationStateService: ApplicationStateService,
              @Inject('ApplicationRoadmapEventService') private applicationRoadmapEventService: ApplicationRoadmapEventService,
              @Inject('UninstallationReasonsStatiscticService') private uninstallationReasonsStatiscticService: UninstallationReasonsStatiscticService) { }

  ngOnInit() {
    this.userAcquisitionStatisticService
      .get()
      .delay(2000)
      .subscribe((data)=>{
      this.userAcquisitionStatisticData = data;
    });
    
    this.applicationStateService
      .get()
      .delay(2500)
      .subscribe((data)=>{
        this.applicationStateData = data;
      });
  
    this.applicationRoadmapEventService
      .get()
      .delay(3500)
      .subscribe((data)=>{
        this.applicationRoadmapEventData = data;
      });
  
    this.uninstallationReasonsStatiscticService
      .get()
      .delay(4000)
      .subscribe((data)=>{
        this.uninstallationReasonsData = data;
      });
    
  }

}
