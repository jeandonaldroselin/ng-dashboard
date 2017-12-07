import {UserAcquisitionStatisticRepository} from "../api/common/userAcquisitionStatisticRepository";
import {UserAcquisitionStatistic} from "../model/userAcquisitionStatistic";
import {Observable} from "rxjs/Observable";

export class UserAcquisitionStatisticService {
  
  constructor(private repository: UserAcquisitionStatisticRepository) {}
  
  get(): Observable<UserAcquisitionStatistic> {
    return this.repository.get();
  }
  
}
