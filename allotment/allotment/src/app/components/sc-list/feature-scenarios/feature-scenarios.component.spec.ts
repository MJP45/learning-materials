import { IntegrationComponent, TestComponent } from '@nology/angular-test-simplifier';
import { FeatureScenariosComponent } from "./feature-scenarios.component";
import { Component } from '@angular/core';
import { mockProjectOne } from '../../../../assets/data/project-data';
import { ScenarioAccordionComponent } from '../scenario-accordion/scenario-accordion.component';
import { ScenarioCardContainerComponent } from '../scenario-card-container/scenario-card-container.component';
import { ToggleSwitchComponent } from '../../toggle-switch/toggle-switch.component';
import { IScenario, IFeature } from 'src/app/services/project.service';
import { NavbarComponent } from '../../navbar/navbar.component';
import { ScenarioAccordionItemComponent } from '../scenario-accordion-item/scenario-accordion-item.component';
import { ScenarioCardComponent } from '../scenario-card/scenario-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
//import {ScenarioAccordionComponent} from '../acc-sc';

@Component({
  template: '<app-feature-scenarios [feature]="feature"></app-feature-scenarios>'
})
class MockParentComponent {
  feature: IFeature = mockProjectOne.features[0];
}

describe("FeatureScenariosComponent", () => {
  let testScenarioList: IntegrationComponent<FeatureScenariosComponent, MockParentComponent>;

  beforeEach(() => {
    testScenarioList = new IntegrationComponent<FeatureScenariosComponent, MockParentComponent>(FeatureScenariosComponent, MockParentComponent)
    testScenarioList.configure({
      declarations: [ToggleSwitchComponent, ScenarioAccordionComponent, ScenarioCardContainerComponent, ScenarioAccordionItemComponent, ScenarioCardComponent, SearchBarComponent],
      imports: [FontAwesomeModule]
    })
    testScenarioList.initialise();
  });

  it('should create', () => {
    expect(testScenarioList).toBeTruthy();
  });

  it('should receive input of feature from parent component', () => {

    let firstFeature = mockProjectOne.features[0];
    let secondFeature = mockProjectOne.features[1];

    testScenarioList.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testScenarioList.instance.feature).toEqual(mockProjectOne.features[0]);

    testScenarioList.setParentProps({
      feature: mockProjectOne.features[1]
    });

    expect(testScenarioList.instance.feature).toEqual(mockProjectOne.features[1]);
  })

  it('should render the title of the feature', () => {
    testScenarioList.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testScenarioList.parentElement.textContent).toContain(mockProjectOne.features[0].name);


    testScenarioList.setParentProps({
      feature: mockProjectOne.features[1]
    });

    expect(testScenarioList.parentElement.textContent).toContain(mockProjectOne.features[1].name);

  })

  it('should render the number of scenarios', () => {
    testScenarioList.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testScenarioList.parentElement.textContent).toContain(mockProjectOne.features[0].scenarios.length);
  });

  it("should return scenarios whos name include the search term", () => {
    let featureData: IFeature = mockProjectOne.features[0];
    testScenarioList.setProps({ feature: featureData });
    testScenarioList.instance.handleScenarioSearch("money");
    expect(testScenarioList.instance.filteredScenarios.length).toEqual(2);
  });

  it("should return scenarios where the search term is included in the step name", () => {
    let featureData: IFeature = mockProjectOne.features[0];
    testScenarioList.setProps({ feature: featureData });
    testScenarioList.instance.handleScenarioSearch("naughty");
    expect(testScenarioList.instance.filteredScenarios.length).toEqual(1);
  });

})




