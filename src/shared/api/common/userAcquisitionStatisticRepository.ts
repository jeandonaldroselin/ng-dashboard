import {Observable} from "rxjs/Observable";
import {UserAcquisitionStatistic} from "../../model/userAcquisitionStatistic";

export interface UserAcquisitionStatisticRepository {
  
  get(): Observable<UserAcquisitionStatistic>;
  
}
