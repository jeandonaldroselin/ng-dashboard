import {Observable} from "rxjs/Observable";
import {UninstallationReasonsStatisticRepository} from "../api/common/uninstallationReasonsStatisticRepository";
import {UninstallationStatistic} from "../model/uninstallationStatistic";

export class UninstallationReasonsStatiscticService {
  
  constructor(private repository: UninstallationReasonsStatisticRepository) {}
  
  get(): Observable<UninstallationStatistic> {
    return this.repository.get();
  }
  
}
