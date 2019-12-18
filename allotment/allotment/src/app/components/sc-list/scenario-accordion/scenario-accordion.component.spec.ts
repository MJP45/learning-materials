import { ScenarioAccordionComponent } from "./scenario-accordion.component";
import { Component } from '@angular/core';
import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { ScenarioAccordionItemComponent } from '../scenario-accordion-item/scenario-accordion-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IScenario } from 'src/app/services/project.service';
import { mockProjectOne } from 'src/assets/data/project-data';


  @Component({
    template: ' <app-scenario-accordion [scenarios]="scenarios" ></app-scenario-accordion>'
  })
  class MockParentComponent {
    scenarios: IScenario [] = mockProjectOne.features[0].scenarios;
  }
  
  describe("ScenarioAccordionComponent", () => {
    let testAccContainer: IntegrationComponent<ScenarioAccordionComponent, MockParentComponent>;

  beforeEach(() => {
    testAccContainer = new IntegrationComponent<ScenarioAccordionComponent, MockParentComponent>(ScenarioAccordionComponent, MockParentComponent)
    testAccContainer.configure({
      declarations: [ScenarioAccordionItemComponent],
      imports: [FontAwesomeModule]
    })
    testAccContainer.initialise();
  });

  it('should create', () => {
    expect(testAccContainer).toBeTruthy();
  });

  it('should recieve input of scenarios from parent component', () => {
    const firstLot = mockProjectOne.features[0].scenarios;
    const secondLot = mockProjectOne.features[1].scenarios;


    testAccContainer.setParentProps({
      scenarios: firstLot
    });
    expect(testAccContainer.instance.scenarios).toEqual(firstLot);
 
    testAccContainer.setParentProps({
      scenarios: secondLot
    });
    expect(testAccContainer.instance.scenarios).toEqual(secondLot);
  })

})



