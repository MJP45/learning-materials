import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faTimes, faChevronDown, faChevronUp, faArrowRight, faFileSignature, faSignature } from "@fortawesome/free-solid-svg-icons";
import { IScenario, IFeature } from 'src/app/services/project.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-feature-accordion-item',
  templateUrl: './feature-accordion-item.component.html',
  styleUrls: ['./feature-accordion-item.component.scss']
})
export class FeatureAccordionItemComponent implements OnInit {
  @Input() feature: IFeature;
  @Input() featureTitleFontSize:number = 20;
  @Input() isViewingSnapshot: boolean = false;
  @Output() handleScenarioClick = new EventEmitter();
  
  isShowing: boolean = false;
  faArrowRight = faArrowRight;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  newUrl: string;

  handleClick(scenario: IScenario) {
    this.handleScenarioClick.emit(scenario);
  }

  handleSignOff(featureId: number){
    //TO DO: --> To be implemented once details of the data API are known
  }

  toggleDescription() {
    this.isShowing = !this.isShowing;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlId = param.get("projectId");
      this.newUrl = `/projects/${urlId}/features`;
    });
  }

}
