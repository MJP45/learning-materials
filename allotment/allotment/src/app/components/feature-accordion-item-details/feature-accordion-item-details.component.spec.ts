import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { Component } from '@angular/core';
import { FeatureAccordionItemDetailsComponent } from './feature-accordion-item-details.component';
import { mockFeatureOne } from '../../../assets/data/project-data';
import { IScenario } from 'src/app/services/project.service';

@Component({
  template: '<app-feature-accordion-item-details [scenario]="scenario" (handleScenarioClick)="testFunc($event)"></app-feature-accordion-item-details>'
})
class MockParentComponent {
  scenario: IScenario = mockFeatureOne.scenarios[0];

  testFunc(input:any) {
    return input;
  }
};

describe("FeatureAccordionItemDetailsComponent", () => {
  let testExpanderComponent: IntegrationComponent<FeatureAccordionItemDetailsComponent, MockParentComponent>;

  beforeEach(() => {
    testExpanderComponent = new IntegrationComponent<FeatureAccordionItemDetailsComponent, MockParentComponent>(FeatureAccordionItemDetailsComponent, MockParentComponent);
    testExpanderComponent.initialise();
  });

  it('should create', () => {
    expect(testExpanderComponent).toBeTruthy();
  });

  it("should receive an IScenario as data input", () => {
    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });

    expect(testExpanderComponent.instance.scenario).toEqual(mockFeatureOne.scenarios[0]);

    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });

    expect(testExpanderComponent.instance.scenario).toEqual(mockFeatureOne.scenarios[1]);
  });



  it("should render the scenario name", () => {
    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });
    expect(testExpanderComponent.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].name
    );

    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });
    expect(testExpanderComponent.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[1].name
    );
  });

  it("should render the scenario test status", () => {
    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[0]
    });
    expect(testExpanderComponent.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].testStatus
    );
    testExpanderComponent.setParentProps({
      scenario: mockFeatureOne.scenarios[1]
    });
    expect(testExpanderComponent.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[1].testStatus
    );
  })

  it("checking handleClick method emits an event to the parent", () => {
    const spy = spyOn(testExpanderComponent.parentInstance, "testFunc");
    expect(spy).toHaveBeenCalledTimes(0);
    testExpanderComponent.instance.handleClick();
    expect(spy).toHaveBeenCalledTimes(1);
    testExpanderComponent.instance.handleClick();
    expect(spy).toHaveBeenCalledTimes(2);
  })
});
