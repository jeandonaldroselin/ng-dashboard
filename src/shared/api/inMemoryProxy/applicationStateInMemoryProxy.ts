import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {ApplicationState} from "../../model/applicationState";
import {ApplicationStateRepository} from "../common/applicationStateRepository";

export class ApplicationStateInMemoryProxy implements ApplicationStateRepository {
  
  get(): Observable<ApplicationState> {
    return Observable.create((observer: Observer<ApplicationState>)=>{
        observer.next(
          new ApplicationState(
            { lastVersion: '1.5.4', status: 'deployed', openedIssues: 13 },
            { lastVersion: '1.5.4', status: 'deployed', openedIssues: 21 },
            { lastVersion: '1.2.0', status: 'deployed', openedIssues: 12 },
            { lastVersion: '1.0.1', status: 'deployed', openedIssues: 11 }
          )
        );
      }
    );
  }
  
}
