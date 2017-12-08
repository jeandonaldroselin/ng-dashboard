import {Observable} from "rxjs/Observable";
import {RoadmapEvent} from "../../model/roadmapEvent";

export interface ApplicationRoadmapEventRepository {
  
  get(): Observable<Array<RoadmapEvent>>;
  
}
