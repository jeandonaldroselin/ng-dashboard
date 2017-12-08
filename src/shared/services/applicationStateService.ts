import {Observable} from "rxjs/Observable";
import {ApplicationStateRepository} from "../api/common/applicationStateRepository";
import {ApplicationState} from "../model/applicationState";

export class ApplicationStateService {
  
  constructor(private repository: ApplicationStateRepository) {}
  
  get(): Observable<ApplicationState> {
    return this.repository.get();
  }
  
}
