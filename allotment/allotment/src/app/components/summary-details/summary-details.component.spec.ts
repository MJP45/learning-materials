import { SummaryDetailsComponent } from "./summary-details.component";
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import {
  mockProjectOne,
  mockProjectTwo,
  mockProjectThree
} from "src/assets/data/project-data";
import { IProject, IFeature} from 'src/app/services/project.service';
import { FeatureStatusAndSignOffComponent } from '../common/feature-status-and-sign-off/feature-status-and-sign-off.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeatureAccordionItemDetailsComponent } from '../feature-accordion-item-details/feature-accordion-item-details.component';

@Component({
  template: `
    <app-summary-details [project]="project"></app-summary-details>
  `
})
class MockProjectParentComponent {
  project: IProject = mockProjectOne;
}

@Component({
  template: `
    <app-summary-details [feature]="feature"></app-summary-details>
  `
})
class MockFeatureParentComponent {
  feature: IFeature = mockProjectOne.features[0];
}

describe("SummaryDetailsProjectPageComponent", () => {
  let testSummaryDetailsProject: IntegrationComponent<
    SummaryDetailsComponent,
    MockProjectParentComponent
  >;
  beforeEach(() => {
    testSummaryDetailsProject = new IntegrationComponent<
      SummaryDetailsComponent,
      MockProjectParentComponent
    >(SummaryDetailsComponent, MockProjectParentComponent);
      testSummaryDetailsProject.configure({
      declarations:[FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule]
    });
      testSummaryDetailsProject.initialise();
  });

  it("should create", () => {
    expect(testSummaryDetailsProject).toBeTruthy();
  });

  it("should receive a project as data input", () => {
    testSummaryDetailsProject.setParentProps({
      project: mockProjectTwo
    });
    expect(testSummaryDetailsProject.instance.project).toEqual(mockProjectTwo);

    testSummaryDetailsProject.setParentProps({
      project: mockProjectThree
    });
    expect(testSummaryDetailsProject.instance.project).toEqual(mockProjectThree);
  });

  it("should render the ID if a project", () => {
    testSummaryDetailsProject.setProps({
      detailsIsOpen: true
    })
    expect(testSummaryDetailsProject.parentElement.textContent).toContain(mockProjectOne.id);
  });

  it("should render the project status if a project", () => {
    testSummaryDetailsProject.setProps({
      detailsIsOpen: true
    })
    expect(testSummaryDetailsProject.parentElement.textContent).toContain(mockProjectOne.status);
  });

  it("should set isProject to true when given a project", () => {
    expect(testSummaryDetailsProject.instance.isProject).toEqual(true);
  });
});

describe("SummaryDetailsFeaturePageComponent", () => {
  let testSummaryDetailsFeature: IntegrationComponent<
    SummaryDetailsComponent,
    MockFeatureParentComponent
  >;
  beforeEach(() => {
    testSummaryDetailsFeature = new IntegrationComponent<
      SummaryDetailsComponent,
      MockFeatureParentComponent
    >(SummaryDetailsComponent, MockFeatureParentComponent);

    testSummaryDetailsFeature.configure({
      declarations: [FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule]
    });

    testSummaryDetailsFeature.initialise();
  });

  it("should create", () => {
    expect(testSummaryDetailsFeature).toBeTruthy();
  });

  it("should receive a feature as data input", () => {
    testSummaryDetailsFeature.setParentProps({
      feature: mockProjectTwo.features[0]
    });
    expect(testSummaryDetailsFeature.instance.feature).toEqual(mockProjectTwo.features[0]);

    testSummaryDetailsFeature.setParentProps({
      feature: mockProjectTwo.features[1]
    });
    expect(testSummaryDetailsFeature.instance.feature).toEqual(mockProjectTwo.features[1]);
  });

  it("should render the description of the feature", () => {
    testSummaryDetailsFeature.setProps({
      detailsIsOpen: true
    })
    expect(testSummaryDetailsFeature.parentElement.textContent).toContain(
      mockProjectOne.features[0].description
    );
  });

  it("should render the scenario values of feature", () => {
    testSummaryDetailsFeature.setProps({
      detailsIsOpen: true
    })
    expect(testSummaryDetailsFeature.parentElement.textContent).toContain(
      mockProjectOne.features[0].scenarios[0].name
    );
    expect(testSummaryDetailsFeature.parentElement.textContent).toContain(
      mockProjectOne.features[0].scenarios[1].name
    );
    expect(testSummaryDetailsFeature.parentElement.textContent).toContain(
      mockProjectOne.features[0].scenarios[2].name
    );
  });

  it("should set isProject to false when given a feature", () => {
    expect(testSummaryDetailsFeature.instance.isProject).toEqual(false);
  });
});
