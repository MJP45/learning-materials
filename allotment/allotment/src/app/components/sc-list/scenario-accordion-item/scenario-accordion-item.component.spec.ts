import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from '@angular/core';
import { ScenarioAccordionItemComponent } from "./scenario-accordion-item.component";

import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { mockFeatureOne } from 'src/assets/data/project-data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { IScenario } from 'src/app/services/project.service';


@Component({
  template: '<app-scenario-accordion-item [scenario]="scenario"></app-scenario-accordion-item>' 
})
class MockParentComponent {
  scenarios: IScenario[] = mockFeatureOne.scenarios;
  scenario: IScenario = this.scenarios[0]
}

describe("accScPiece", () => {
  let testAccScPiece: IntegrationComponent<ScenarioAccordionItemComponent, MockParentComponent>;

  beforeEach(() => {
    testAccScPiece = new IntegrationComponent<ScenarioAccordionItemComponent, MockParentComponent>(ScenarioAccordionItemComponent, MockParentComponent);
    testAccScPiece.configure({
      declarations: [ScenarioAccordionItemComponent],
      imports:[FontAwesomeModule]
    })
    testAccScPiece.initialise();
  });

  it("should create", () => {
    expect(testAccScPiece).toBeTruthy();
  });

  it("should receive an IScenario as data input", () => {
    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });

    expect(testAccScPiece.instance.scenario).toEqual(mockFeatureOne.scenarios[0]);

    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });

    expect(testAccScPiece.instance.scenario).toEqual(mockFeatureOne.scenarios[1]);
  });



  it("should render the scenario name", () => {
    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].name
    );

    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[1].name
    );
  });

  it("should render the scenario test status", () => {
    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].testStatus
    );
    testAccScPiece.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[1].testStatus
    );
  });

  it("checking toggleClick method toggles a the isShowing boolean", () => {
    testAccScPiece.setProps({
      isShowing: false,
    });
    testAccScPiece.instance.toggleDescription();    
    expect(testAccScPiece.instance.isShowing).toBeTruthy();
    testAccScPiece.instance.toggleDescription();  
    expect(testAccScPiece.instance.isShowing).toBeFalsy();
  });

  it("checking toggleClick method change the chevron icon attribute", () => {
    testAccScPiece.setProps({
      faChevron: faChevronDown
    });
    testAccScPiece.instance.toggleDescription();
    expect(testAccScPiece.instance.faChevron).toEqual(faChevronUp);    
    testAccScPiece.instance.toggleDescription();
    expect(testAccScPiece.instance.faChevron).toEqual(faChevronDown);    
  });

  it("should render the scenario steps if isShowing is true", () => {
    testAccScPiece.setProps({
      scenario: mockFeatureOne.scenarios[0],
      isShowing: true,
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].steps[0].text
    );
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].steps[1].text
    );

    testAccScPiece.setProps({
      scenario: mockFeatureOne.scenarios[0],
      isShowing: false,
    });
    expect(testAccScPiece.parentElement.textContent).not.toContain(
      mockFeatureOne.scenarios[0].steps[0].text
    );
    expect(testAccScPiece.parentElement.textContent).not.toContain(
      mockFeatureOne.scenarios[0].steps[1].text
    );

    testAccScPiece.setProps({
      scenario: mockFeatureOne.scenarios[1],
      isShowing: true,
    });
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].steps[0].text
    );
    expect(testAccScPiece.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].steps[1].text
    );

    testAccScPiece.setProps({
      scenario: mockFeatureOne.scenarios[1],
      isShowing: false,
    });
    expect(testAccScPiece.parentElement.textContent).not.toContain(
      mockFeatureOne.scenarios[0].steps[0].text
    );
    expect(testAccScPiece.parentElement.textContent).not.toContain(
      mockFeatureOne.scenarios[0].steps[1].text
    );
  });
});