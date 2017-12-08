import {Observable} from "rxjs/Observable";
import {ApplicationRoadmapEventRepository} from "../api/common/applicationRoadmapEventRepository";
import {RoadmapEvent} from "../model/roadmapEvent";

export class ApplicationRoadmapEventService {
  
  constructor(private repository: ApplicationRoadmapEventRepository) {}
  
  get(): Observable<Array<RoadmapEvent>> {
    return this.repository.get();
  }
  
}
