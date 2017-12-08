import {Component, Input, OnInit} from '@angular/core';
import {RoadmapEvent} from "../../../shared/model/roadmapEvent";

@Component({
  selector: 'app-calendar-relative-to-application-roadmap',
  templateUrl: './calendar-relative-to-application-roadmap.component.html',
  styleUrls: ['./calendar-relative-to-application-roadmap.component.css']
})
export class CalendarRelativeToApplicationRoadmapComponent {
  
  @Input('data') events: Array<RoadmapEvent>;

}
