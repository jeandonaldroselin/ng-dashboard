import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarRelativeToApplicationRoadmapComponent } from './calendar-relative-to-application-roadmap.component';

describe('CalendarRelativeToApplicationRoadmapComponent', () => {
  let component: CalendarRelativeToApplicationRoadmapComponent;
  let fixture: ComponentFixture<CalendarRelativeToApplicationRoadmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarRelativeToApplicationRoadmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarRelativeToApplicationRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
