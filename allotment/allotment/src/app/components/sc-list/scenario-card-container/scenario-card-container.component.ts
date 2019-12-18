import { Component, OnInit, Input } from '@angular/core';
import { IScenario } from 'src/app/services/project.service';

@Component({
  selector: 'app-scenario-card-container',
  templateUrl: './scenario-card-container.component.html',
  styleUrls: ['./scenario-card-container.component.scss']
})
export class ScenarioCardContainerComponent implements OnInit {

  @Input() scenarios: IScenario[];
  
  constructor() { }

  ngOnInit() {
  }
}
