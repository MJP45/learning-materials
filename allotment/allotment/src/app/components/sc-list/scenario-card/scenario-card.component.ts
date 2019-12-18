import { Component, OnInit, Input } from '@angular/core';
import { IScenario } from 'src/app/services/project.service';

@Component({
  selector: 'app-scenario-card',
  templateUrl: './scenario-card.component.html',
  styleUrls: ['./scenario-card.component.scss']
})
export class ScenarioCardComponent implements OnInit {
  @Input() scenario:IScenario;
  mergedSteps: string[] = [];


  constructor() { }

  ngOnInit() {
    this.scenario.steps.forEach(step => {
      this.mergedSteps.push(`${step.keyword} ${step.text}.`)
    })
  }

}
