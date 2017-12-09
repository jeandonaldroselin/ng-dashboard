import { NgModule } from '@angular/core';
import { UserAcquisitionAndLossChartComponent } from './user-acquisition-and-loss-chart/user-acquisition-and-loss-chart.component';
import { HomeComponent } from "./home.component";
import { ChartModule } from "primeng/primeng";
import { ProgressSpinnerModule } from "primeng/primeng";
import { StepsModule } from 'primeng/primeng';
import { UninstallationReasonsStatisticInMemoryProxy } from "../../shared/api/inMemoryProxy/uninstallationReasonsStatisticInMemoryProxy";
import { UserAcquisitionStatisticService } from "../../shared/services/userAcquisitionStatisticService";
import { CommonModule } from "@angular/common";
import { ApplicationsStatesWizardComponent } from './applications-states-wizard/applications-states-wizard.component';
import { ApplicationStateInMemoryProxy } from "../../shared/api/inMemoryProxy/applicationStateInMemoryProxy";
import { ApplicationStateService } from "../../shared/services/applicationStateService";
import { CalendarRelativeToApplicationRoadmapComponent } from './calendar-relative-to-application-roadmap/calendar-relative-to-application-roadmap.component';
import { ScheduleModule } from 'primeng/primeng';
import {ApplicationRoadmapEventService} from "../../shared/services/applicationRoadmapEventService";
import {ApplicationRoadmapEventInMemoryProxy} from "../../shared/api/inMemoryProxy/applicationRoadmapEventInMemoryProxy";
import { AiReportChartForUserLossReasonsComponent } from './ai-report-chart-for-user-loss-reasons/ai-report-chart-for-user-loss-reasons.component';
import {UninstallationReasonsStatiscticService} from "../../shared/services/uninstallationReasonsStatiscticService";
import {UserAcquisitionStatisticInMemoryProxy} from "../../shared/api/inMemoryProxy/userAcquisitionStatisticInMemoryProxy";
import {PanelModule} from 'primeng/primeng';
import {DragDropModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    HomeComponent,
    UserAcquisitionAndLossChartComponent,
    ApplicationsStatesWizardComponent,
    CalendarRelativeToApplicationRoadmapComponent,
    AiReportChartForUserLossReasonsComponent
  ],
  imports: [
    ChartModule,
    ProgressSpinnerModule,
    StepsModule,
    ScheduleModule,
    PanelModule,
    DragDropModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    {
      provide : 'UserAcquisitionStatisticService',
      useFactory: function() {
        return new UserAcquisitionStatisticService(new UserAcquisitionStatisticInMemoryProxy())
      }
    },
    {
      provide : 'ApplicationStateService',
      useFactory: function() {
        return new ApplicationStateService(new ApplicationStateInMemoryProxy())
      }
    },
    {
      provide : 'ApplicationRoadmapEventService',
      useFactory: function() {
        return new ApplicationRoadmapEventService(new ApplicationRoadmapEventInMemoryProxy())
      }
    },
    {
      provide : 'UninstallationReasonsStatiscticService',
      useFactory: function() {
        return new UninstallationReasonsStatiscticService(new UninstallationReasonsStatisticInMemoryProxy())
      }
    }
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
