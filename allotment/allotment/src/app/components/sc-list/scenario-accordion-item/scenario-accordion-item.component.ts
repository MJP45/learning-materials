import { Component, OnInit, Input } from '@angular/core';
import { IScenario } from 'src/app/services/project.service';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-scenario-accordion-item',
  templateUrl: './scenario-accordion-item.component.html',
  styleUrls: ['./scenario-accordion-item.component.scss']
})
export class ScenarioAccordionItemComponent implements OnInit {
  @Input() scenario:IScenario;
  isShowing: boolean = false;
  mergedSteps: string[] = [];
  faChevron = faChevronDown;

  toggleDescription() {
    this.isShowing = !this.isShowing
    if (this.faChevron === faChevronDown) {
      this.faChevron = faChevronUp;
    } else if (this.faChevron === faChevronUp) {
      this.faChevron = faChevronDown;
    }
  }

  constructor() { }

  ngOnInit() {
    this.scenario.steps.forEach(step => {
      this.mergedSteps.push(`${step.keyword} ${step.text}.`)
    })
  }

}
