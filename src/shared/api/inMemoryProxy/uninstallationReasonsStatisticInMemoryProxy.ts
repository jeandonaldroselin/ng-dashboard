import {UserAcquisitionStatisticRepository} from "../common/userAcquisitionStatisticRepository";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {UninstallationReasonsStatistic} from "../../model/uninstallationStatistic";
import {UninstallationReasonsStatisticRepository} from "../common/uninstallationReasonsStatisticRepository";

export class UninstallationReasonsStatisticInMemoryProxy implements UninstallationReasonsStatisticRepository {
  
  get(): Observable<UninstallationReasonsStatistic> {
    return Observable.create((observer: Observer<UninstallationReasonsStatistic>)=>{
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
