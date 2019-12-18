import { Component, OnInit, Input } from '@angular/core';
import { IScenario } from 'src/app/services/project.service';

@Component({
  selector: 'app-scenario-accordion',
  templateUrl: './scenario-accordion.component.html',
  styleUrls: ['./scenario-accordion.component.scss']
})
export class ScenarioAccordionComponent implements OnInit {
  @Input() scenarios: IScenario[];
    
    constructor() { }
  
    ngOnInit() {
    }

}
