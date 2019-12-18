import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import {
  TestComponent,
  IntegrationComponent
} from "@nology/angular-test-simplifier";
import { FeatureCardComponent } from "./feature-card.component";
import { Component } from "@angular/core";
import { IFeature } from 'src/app/services/project.service';
import { mockProjectOne, mockFeatureOne } from 'src/assets/data/project-data';
import { FeatureStatusAndSignOffComponent } from '../common/feature-status-and-sign-off/feature-status-and-sign-off.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  template: `
    <app-feature-card [feature]="feature"></app-feature-card>
  `
})
class MockParentComponent {
  feature: IFeature = mockProjectOne.features[0];
}

describe("FeatureCardComponent", () => {
  let testFeatureGrid: IntegrationComponent<
    FeatureCardComponent,
    MockParentComponent
  >;

  beforeEach(() => {
    testFeatureGrid = new IntegrationComponent<
      FeatureCardComponent,
      MockParentComponent
    >(FeatureCardComponent, MockParentComponent);
    testFeatureGrid.configure({
      declarations:[FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule, RouterTestingModule]
    });
    testFeatureGrid.initialise();
  });

  it("should create", () => {
    expect(testFeatureGrid).toBeTruthy();
  });
});

describe("FeatureCardComponent integration tests", () => {
  let testFeatureGrid: IntegrationComponent<
    FeatureCardComponent,
    MockParentComponent
  >;

  beforeEach(() => {
    testFeatureGrid = new IntegrationComponent<
      FeatureCardComponent,
      MockParentComponent
    >(FeatureCardComponent, MockParentComponent);
    testFeatureGrid.configure({
      declarations:[FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule, RouterTestingModule]
    });
    testFeatureGrid.initialise();
  });

  it("should receive an IFeature as data input", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.instance.feature).toEqual(mockFeatureOne);
  });

  it("should render feature-name", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      mockFeatureOne.name
    );
  });

  it("should render scenario-status", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[0].testStatus
    );
  });

  it("should render scenario-status", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[1].testStatus
    );
  });

  it("should render scenario-status", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      mockFeatureOne.scenarios[2].testStatus
    );
  });

  it("should render total scenarios", () => {
    testFeatureGrid.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      "Total Scenarios : " + mockFeatureOne.scenarios.length
    );
  });

  it("should render total passed", () => {
    testFeatureGrid.setProps({
      numberOfPassed: 3
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Passed : 3`
    );
  });

  it("should render total passed", () => {
    testFeatureGrid.setProps({
      numberOfPassed: 2
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Passed : 2`
    );
  });

  it("should render total passed", () => {
    testFeatureGrid.setProps({
      numberOfPassed: 6
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Passed : 6`
    );
  });

  it("should render total pending", () => {
    testFeatureGrid.setProps({
      numberOfPending: 0
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Pending : 0`
    );
  });

  it("should render total pending", () => {
    testFeatureGrid.setProps({
      numberOfPending: 1
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Pending : 1`
    );
  });

  it("should render total pending", () => {
    testFeatureGrid.setProps({
      numberOfPending: 5
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Pending : 5`
    );
  });

  it("should render total failed", () => {
    testFeatureGrid.setProps({
      numberOfFailed: 0
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Failed : 0`
    );
  });

  it("should render total failed", () => {
    testFeatureGrid.setProps({
      numberOfFailed: 2
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Failed : 2`
    );
  });

  it("should render total failed", () => {
    testFeatureGrid.setProps({
      numberOfFailed: 7
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Failed : 7`
    );
  });

  it("should render total untested", () => {
    testFeatureGrid.setProps({
      numberOfUndefined: 0
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Untested : 0`
    );
  });

  it("should render total untested", () => {
    testFeatureGrid.setProps({
      numberOfUndefined: 5
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Untested : 5`
    );
  });

  it("should render total untested", () => {
    testFeatureGrid.setProps({
      numberOfUndefined: 10
    });
    expect(testFeatureGrid.parentElement.textContent).toContain(
      `Total Untested : 10`
    );
  });
});
