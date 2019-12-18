import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { IFeature, IProject } from 'src/app/services/project.service';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export interface IProjectDetails {
  name: string;
  id: string;
  status: string;
}

export interface IFeatureDetails {
  name: string;
  description: string;
  scenarios: string[];
}

@Component({
  selector: "app-summary-details",
  templateUrl: "./summary-details.component.html",
  styleUrls: ["./summary-details.component.scss"]
})
export class SummaryDetailsComponent implements OnInit {
  @Input() project?: IProject;
  @Input() feature?: IFeature;
  @Input() isViewingSnapshot: boolean = false;
  @Output() handleTextBoxClick = new EventEmitter();
  projectDetails: IProjectDetails;
  featureDetails: IFeatureDetails;
  isProject: boolean;
  faChevron = faChevronDown;
  detailsIsOpen: boolean = false; 

  textBoxClick() {
    this.detailsIsOpen = !this.detailsIsOpen;
    this.handleTextBoxClick.emit(this.detailsIsOpen);
    if (this.faChevron === faChevronDown) {
      this.faChevron = faChevronUp;
    } else if (this.faChevron === faChevronUp) {
      this.faChevron = faChevronDown;
    }
  }

  constructor() {}

  ngOnInit() {
    this.project ? (this.isProject = true) : (this.isProject = false);
    if (this.project) {
      this.projectDetails = {
        name: this.project.name,
        id: this.project.id,
        status: this.project.status
      };
    } else {
      this.featureDetails = {
        name: this.feature.name,
        description: this.feature.description,
        scenarios: this.feature.scenarios.map(scenario => {
          return scenario.name;
        })
      };
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.project) {
      this.projectDetails = changes.project.currentValue;
    }
  }
}
