import {Observable} from "rxjs/Observable";
import {UninstallationReasonsStatisticRepository} from "../api/common/uninstallationReasonsStatisticRepository";
import {UninstallationReasonsStatistic} from "../model/uninstallationStatistic";

export class UninstallationReasonsStatiscticService {
  
  constructor(private repository: UninstallationReasonsStatisticRepository) {}
  
  get(): Observable<UninstallationReasonsStatistic> {
    return this.repository.get();
  }
  
}
