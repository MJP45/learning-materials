import { Component, OnInit, Input} from '@angular/core';
import { IFeature, IScenario } from "src/app/services/project.service";

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() feature: IFeature;
  @Input() isViewingSnapshot: boolean = false;
  
  numberOfPassed: number = 0;
  numberOfFailed: number = 0;
  numberOfUndefined: number = 0;
  numberOfPending: number = 0;
  totalTests: number = 0;
  green: string;
  red: string;
  yellow: string;
  grey: string;

  constructor() { }

  ngOnInit() {
  
  }

  getFeatureTestStatus(feature: IFeature) {
    let numPassed = this.numberOfPassed;
    let numFailed = this.numberOfFailed;
    let numPending = this.numberOfPending;
    let numUndef = this.numberOfUndefined;
    let total = this.totalTests;

    feature.scenarios.forEach((scenario: IScenario) => {
      switch (scenario.testStatus) {
        case "Passed":
          numPassed++;
          total++;
          break;
        case "Failed":
          numFailed++;
          total++;
          break;
        case "Undefined":
          numUndef++;
          total++;
          break;
        case "Pending":
          numPending++;
          total++;
          break;
      }
    });

    this.numberOfPassed = numPassed;
    this.numberOfFailed = numFailed;
    this.numberOfUndefined = numUndef;
    this.numberOfPending = numPending;
    this.totalTests = total;


    this.red = this.calculatePercentages(this.numberOfFailed, this.totalTests) + '%';
    this.grey = this.calculatePercentages(this.numberOfUndefined, this.totalTests) + '%';
    this.yellow = this.calculatePercentages(this.numberOfPending, this.totalTests) + '%';
    this.green = this.calculatePercentages(this.numberOfPassed, this.totalTests) + '%';
  }


  calculatePercentages(num: number, totalNum: number) {
    let percentage = ((num / totalNum) * 100);
    return percentage;
  }

}
