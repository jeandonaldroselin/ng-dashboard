import {Observable} from "rxjs/Observable";
import {ApplicationState} from "../../model/applicationState";

export interface ApplicationStateRepository {
  
  get(): Observable<ApplicationState>;
  
}
