import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFeature } from 'src/app/services/project.service';
import { faTimes, faChevronDown, faChevronUp, faArrowRight, faFileSignature, faSignature } from "@fortawesome/free-solid-svg-icons";
import { IntegrationComponent } from '@nology/angular-test-simplifier';

@Component({
  selector: 'app-feature-status-and-sign-off',
  templateUrl: './feature-status-and-sign-off.component.html',
  styleUrls: ['./feature-status-and-sign-off.component.scss']
})
export class FeatureStatusAndSignOffComponent implements OnInit {
  @Input() feature: IFeature;
  @Output() handleSignOffClick = new EventEmitter();
  @Input() featureTitleFontSize: number;
  @Input() isViewingSnapshot: boolean = false;

  testStatus: string;
  showSignOffPopUp: boolean = false;
  faFileSignature = faFileSignature;
  faSignature = faSignature;
  faTimes = faTimes; 

  handleStatusClick(event: Event): void {
    this.showSignOffPopUp = !this.showSignOffPopUp;
    event.stopPropagation();
  }

  handleSignOff(event: Event): void {
    this.handleSignOffClick.emit(this.feature.id);
    event.stopPropagation();
    this.feature.status = "In development";
    this.testStatus = this.getTestStatus(this.feature);
    this.showSignOffPopUp = !this.showSignOffPopUp;
  }

  getTestStatus(feature:IFeature): string {
    if (feature.status === "Pending sign off") {
      return feature.status;
    } else {
      const filteredArray = feature.scenarios.filter(scenario => scenario.testStatus === "Failed");
      return filteredArray.length >= 1 ? "In development" : "Complete";
    }
  }

  constructor() { }

  ngOnInit() {
    this.testStatus = this.getTestStatus(this.feature);
  }

}
