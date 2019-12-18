import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { ScenarioCardComponent } from "./scenario-card.component";
import { Component } from "@angular/core";
import { mockScenarioOne } from "../../../../assets/data/project-data";
import { IScenario } from 'src/app/services/project.service';

@Component({
  template: `
    <app-scenario-card [scenario]="scenarios"></app-scenario-card>
  `
})
class MockParentComponent {
  scenarios: IScenario = mockScenarioOne;
}

describe("ScenarioCardComponent", () => {
  let testGridCard: IntegrationComponent<ScenarioCardComponent, MockParentComponent>;

  beforeEach(() => {
    testGridCard = new IntegrationComponent<ScenarioCardComponent, MockParentComponent>(
      ScenarioCardComponent,
      MockParentComponent
    );
    testGridCard.initialise();
  });

  it("should create", () => {
    expect(testGridCard).toBeTruthy();
  });
});

describe("ScenarioCardComponent integration tests", () => {
  let testGridCard: IntegrationComponent<ScenarioCardComponent, MockParentComponent>;

  beforeEach(() => {
    testGridCard = new IntegrationComponent<ScenarioCardComponent, MockParentComponent>(
      ScenarioCardComponent,
      MockParentComponent
    );
    testGridCard.initialise();
  });

  it("should receive an IScenario as data input", () => {
    testGridCard.setParentProps({
      scenario: mockScenarioOne
    });
    expect(testGridCard.instance.scenario).toEqual(mockScenarioOne);
  });

  it("should render scenario-name", () => {
    testGridCard.setParentProps({
      scenario: mockScenarioOne
    });
    expect(testGridCard.parentElement.textContent).toContain(mockScenarioOne.name);
  });

  it("should render scenario-status", () => {
    testGridCard.setParentProps({
      scenario: mockScenarioOne
    });
    expect(testGridCard.parentElement.textContent).toContain(mockScenarioOne.testStatus);
  });
});
