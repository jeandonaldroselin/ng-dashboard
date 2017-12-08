import {Component, Input, OnInit} from '@angular/core';
import { MenuItem, Message } from "primeng/primeng";
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {ApplicationState} from "../../../shared/model/applicationState";

@Component({
  selector: 'app-applications-states-wizard',
  templateUrl: './applications-states-wizard.component.html',
  styleUrls: ['./applications-states-wizard.component.css']
})
export class ApplicationsStatesWizardComponent implements OnInit {

  constructor() { }
  
  @Input() data: ApplicationState;
  
  items: MenuItem[];
  
  msgs: Message[] = [];
  
  activeIndex: number = 0;
  
  ngOnInit() {
      Observable
      .create((observer: Observer<any>) => observer.next(null))
      .delay(3000)
      .subscribe(()=>{
        this.items = [{
          label: 'Mobile App',
          command: (event: any) => {
            this.activeIndex = 0;
            this.msgs.length = 0;
            this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
          }
        },
          {
            label: 'Client B.',
            command: (event: any) => {
              this.activeIndex = 1;
              this.msgs.length = 0;
              this.msgs.push({severity:'info', summary:'Pay with CC', detail: event.item.label});
            }
          },
          {
            label: 'Trainers B.',
            command: (event: any) => {
              this.activeIndex = 2;
              this.msgs.length = 0;
              this.msgs.push({severity:'info', summary:'Last Step', detail: event.item.label});
            }
          }
        ];
      })
  }

}
