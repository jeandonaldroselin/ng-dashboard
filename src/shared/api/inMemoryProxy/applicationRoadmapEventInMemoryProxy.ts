import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import * as moment from 'moment';
import {RoadmapEvent} from "../../model/roadmapEvent";
import {ApplicationRoadmapEventRepository} from "../common/applicationRoadmapEventRepository";

export class ApplicationRoadmapEventInMemoryProxy implements ApplicationRoadmapEventRepository {
  
  get(): Observable<Array<RoadmapEvent>> {
    return Observable.create((observer: Observer<Array<RoadmapEvent>>)=>{
        observer.next(
          new Array(
            {
              title: "App Deployment/ntoto la famille",
              start: moment().startOf('isoWeek').format('Y-M-D')
            },
            {
              title: "App Validation",
              start: moment().startOf('isoWeek').add(1, 'd').format('Y-M-D'),
            },
            {
              title: "Client Board Deployment",
              start: moment().startOf('isoWeek').add(2, 'd').format('Y-M-D')
            },
            {
              title: "Mailing",
              start: moment().startOf('isoWeek').add(3, 'd').format('Y-M-D')
            }
          )
        );
      }
    );
  }
  
}
