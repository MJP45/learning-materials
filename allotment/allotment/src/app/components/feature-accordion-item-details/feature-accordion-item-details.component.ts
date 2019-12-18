import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IScenario } from 'src/app/services/project.service';

@Component({
  selector: 'app-feature-accordion-item-details',
  templateUrl: './feature-accordion-item-details.component.html',
  styleUrls: ['./feature-accordion-item-details.component.scss']
})
export class FeatureAccordionItemDetailsComponent implements OnInit {
  @Input() scenario: IScenario;
  @Input() featureTitleFontSize:number = 20;
  @Output() handleScenarioClick = new EventEmitter();

  testStatus: string = "undefined"; 

  handleClick(){
    this.handleScenarioClick.emit(this.scenario);
  }

  getClass(){
    return this.testStatus.toLowerCase();
  }

  constructor() {}

  ngOnInit() {
    this.testStatus = this.scenario.testStatus;
  }
}
