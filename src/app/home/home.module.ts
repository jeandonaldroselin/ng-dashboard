import { NgModule } from '@angular/core';
import { UserAcquisitionAndLossChartComponent } from './user-acquisition-and-loss-chart/user-acquisition-and-loss-chart.component';
import { HomeComponent } from "./home.component";
import { ChartModule } from "primeng/primeng";
import { ProgressSpinnerModule } from "primeng/primeng";
import {UserAcquisitionStatisticInMemoryProxy} from "../../shared/api/inMemoryProxy/userAcquisitionStatisticInMemoryProxy";
import {UserAcquisitionStatisticService} from "../../shared/services/userAcquisitionStatisticService";
import {CommonModule} from "@angular/common";


@NgModule({
  declarations: [
    HomeComponent,
    UserAcquisitionAndLossChartComponent
  ],
  imports: [
    ChartModule,
    ProgressSpinnerModule,
    CommonModule
  ],
  providers: [
    {
      provide : 'UserAcquisitionStatisticService',
      useFactory: function() {
        return new UserAcquisitionStatisticService(new UserAcquisitionStatisticInMemoryProxy())
      }
    }
  ],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
