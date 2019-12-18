import { Component, OnInit, Input } from '@angular/core';
import { IFeature, IScenario } from 'src/app/services/project.service';

@Component({
  selector: 'app-feature-scenarios',
  templateUrl: './feature-scenarios.component.html',
  styleUrls: ['./feature-scenarios.component.scss']
})
export class FeatureScenariosComponent implements OnInit {
  @Input() feature:IFeature;
  // featureTitle: string;
  // scenarios: IScenario[];
  // numberOfScenarios: number;
  isList: boolean = true;
  aShown = true;
  filteredScenarios: IScenario[];
  scenarios: IScenario[];

  toggleShown() {
    this.aShown = !this.aShown;
  }

  constructor() { }

  ngOnInit() {
    // this.featureTitle = this.feature.name;
    this.scenarios = this.feature.scenarios;
    // this.numberOfScenarios = this.scenarios.length;
    this.filteredScenarios = this.scenarios;
  }

  handleScenarioSearch(searchText: string) {
    this.filteredScenarios = this.scenarios.filter(scenario => {
      if (scenario.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (this.searchScenarioSteps(scenario, searchText)) {
        return true;
      } else {
        return false;
      };
    });
  }

  searchScenarioSteps(scenario: IScenario, searchText: string): boolean {
    let stepFoundScenario: boolean[];
    stepFoundScenario = scenario.steps.map(step => {
      return (step.text.toLowerCase().includes(searchText.toLowerCase()));
    })
    return stepFoundScenario.includes(true);
  }
}
