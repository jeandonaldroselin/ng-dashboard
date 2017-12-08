import {Observable} from "rxjs/Observable";
import {UninstallationReasonsStatistic} from "../../model/uninstallationStatistic";

export interface UninstallationReasonsStatisticRepository {
  
  get(): Observable<UninstallationReasonsStatistic>;
  
}
