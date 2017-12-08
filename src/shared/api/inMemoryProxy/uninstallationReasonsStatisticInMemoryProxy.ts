import {UserAcquisitionStatisticRepository} from "../common/userAcquisitionStatisticRepository";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {UninstallationStatistic} from "../../model/uninstallationStatistic";
import {UninstallationReasonsStatisticRepository} from "../common/uninstallationReasonsStatisticRepository";

export class UninstallationReasonsStatisticInMemoryProxy implements UninstallationReasonsStatisticRepository {
  
  get(): Observable<UninstallationStatistic> {
    return Observable.create((observer: Observer<UninstallationStatistic>)=>{
        observer.next(
          {
            labels: ['Unusage' ,'Bug Issues', 'Inappropriate fo use'],
            datasets: [
              {
                data: [15, 55, 30],
                backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ],
                hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
                ]
              }]
          }
        );
      }
    );
  }
  
}
