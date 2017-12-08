import {Observable} from "rxjs/Observable";
import {UninstallationStatistic} from "../../model/uninstallationStatistic";

export interface UninstallationReasonsStatisticRepository {
  
  get(): Observable<UninstallationStatistic>;
  
}
