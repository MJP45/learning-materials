import { ScenarioCardContainerComponent } from "./scenario-card-container.component";
import { mockProjectOne } from '../../../../assets/data/project-data';
import { Component } from '@angular/core';
import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScenarioCardComponent } from '../scenario-card/scenario-card.component';
import { IScenario } from 'src/app/services/project.service';


  @Component({
    template: "<app-scenario-card-container [scenarios]='scenarios'></app-scenario-card-container>"
  })
  class MockParentComponent {
    scenarios: IScenario [] = mockProjectOne.features[0].scenarios;
  }
  
  describe("ScenarioAccordionComponent", () => {
    let testGridContainer: IntegrationComponent<ScenarioCardContainerComponent, MockParentComponent>;

  beforeEach(() => {
    testGridContainer = new IntegrationComponent<ScenarioCardContainerComponent, MockParentComponent>(ScenarioCardContainerComponent, MockParentComponent)
    testGridContainer.configure({
      declarations: [ScenarioCardComponent],
      imports: [FontAwesomeModule]
    })
    testGridContainer.initialise();
  });

  it('should create', () => {
    expect(testGridContainer).toBeTruthy();
  });

  it('should recieve input of scenarios from parent component', () => {
    const firstLot = mockProjectOne.features[0].scenarios;
    const secondLot = mockProjectOne.features[1].scenarios;

    testGridContainer.setParentProps({
      scenarios: firstLot
     
    });
    expect(testGridContainer.instance.scenarios).toEqual(firstLot);
 
    testGridContainer.setParentProps({
      scenarios: secondLot
    });
    expect(testGridContainer.instance.scenarios).toEqual(secondLot);
  })

})
