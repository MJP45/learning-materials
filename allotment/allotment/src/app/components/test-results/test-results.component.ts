import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { mockProjectOne } from 'src/assets/data/project-data';
import { IProject, IFeature, IScenario, IStep, } from 'src/app/services/project.service';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.scss']
})
export class TestResultsComponent implements OnInit {
  @Input() feature?: IFeature;
  @Input() project?: IProject;

  results = {
    Passed: 0,
    Failed: 0,
    Pending: 0,
    Undefined: 0
  };

  mockProject = mockProjectOne;
  totalTests: number = 0;
  projectStatus: string = null;
  green: string;
  red: string;
  yellow: string;
  grey: string;
  isProject: boolean = false;
  faChevron = faChevronDown;
  testsOpen: boolean = false; 
  @Output() handleTextBoxClick = new EventEmitter();


  textBoxClick() {
    this.testsOpen = !this.testsOpen;
    this.handleTextBoxClick.emit(this.testsOpen);
    if (this.faChevron === faChevronDown) {
      this.faChevron = faChevronUp;
    } else if (this.faChevron === faChevronUp) {
      this.faChevron = faChevronDown;
    }
  }
  
  constructor() { }

  ngOnInit() {
    if (this.project) {
      this.isProject = true;
      this.totalNumber(this.project);
    } else {
      this.getFeatureTestStatus(this.feature);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project) {
      this.results["Failed"] = 0;
      this.results["Passed"] = 0;
      this.results["Pending"] = 0;
      this.results["Undefined"] = 0;
      this.totalTests = 0;
      this.totalNumber(changes.project.currentValue);
      this.isProject ? this.projectStatus = this.project.status : "";
    } else {
      this.results["Failed"] = 0;
      this.results["Passed"] = 0;
      this.results["Pending"] = 0;
      this.results["Undefined"] = 0;
      this.totalTests = 0;
      this.getFeatureTestStatus(changes.feature.currentValue);
    }
  }

  getFeatureTestStatus(feature: IFeature) {
    feature.scenarios.forEach((scenario: IScenario) => {
      this.results[scenario.testStatus]++;
      this.totalTests++;
    });

    this.red = this.calculatePercentages(this.results["Failed"], this.totalTests) + "%";
    this.grey = this.calculatePercentages(this.results["Undefined"], this.totalTests) + "%";
    this.yellow = this.calculatePercentages(this.results["Pending"], this.totalTests) + "%";
    this.green = this.calculatePercentages(this.results["Passed"], this.totalTests) + "%";
  }

  totalNumber(project: IProject) {
    project.features.forEach((feature: IFeature) => this.getFeatureTestStatus(feature));
  }

  calculatePercentages(num: number, totalNum: number) {
    let percentage = Math.floor((num / totalNum) * 100 * 100) / 100;
    return percentage;
  }
}
