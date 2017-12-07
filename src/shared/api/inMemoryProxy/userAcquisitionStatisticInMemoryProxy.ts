import {UserAcquisitionStatisticRepository} from "../common/userAcquisitionStatisticRepository";
import {Observable} from "rxjs/Observable";
import {UserAcquisitionStatistic} from "../../model/userAcquisitionStatistic";
import {Observer} from "rxjs/Observer";

export class UserAcquisitionStatisticInMemoryProxy implements UserAcquisitionStatisticRepository {
  
  get(): Observable<UserAcquisitionStatistic> {
    return Observable.create((observer: Observer<UserAcquisitionStatistic>)=>{
        observer.next(
          new UserAcquisitionStatistic(
            ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            [
              {
                label: 'User acquisition',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: [65, 59, 80, 81, 56, 55, 40]
              },
              {
                label: 'User loss',
                backgroundColor: '#ff0000',
                borderColor: '#b40000',
                data: [28, 48, 40, 19, 86, 27, 90]
              }
            ]
          )
        );
      }
    );
  }
  
}
