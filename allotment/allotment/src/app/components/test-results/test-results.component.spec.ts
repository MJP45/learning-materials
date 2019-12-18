import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { TestResultsComponent } from "./test-results.component";
import { mockProjectOne, mockFeatureOne, mockFeatureTwo, mockProjectFive } from "src/assets/data/project-data";
import {  IProject, IFeature } from 'src/app/services/project.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  template: `
    <app-test-results [project]="project"></app-test-results>
  `
})
class MockProjectParentComponent {
  project: IProject = mockProjectOne;
}
@Component({
  template: `
    <app-test-results [feature]="feature"></app-test-results>
  `
})
class MockFeatureParentComponent {
  feature: IFeature = mockProjectOne.features[0];
}
const setPropsToZero = (testResultsComponent: TestResultsComponent) => {
  testResultsComponent.results.Failed = 0;
  testResultsComponent.results.Passed = 0;
  testResultsComponent.results.Undefined = 0;
  testResultsComponent.results.Pending = 0;
  testResultsComponent.totalTests = 0;
};
describe("TestResultsComponent Project input tests", () => {
  let testTestResults: IntegrationComponent<
    TestResultsComponent,
    MockProjectParentComponent
  >;
  beforeEach(() => {
    testTestResults = new IntegrationComponent<
      TestResultsComponent,
      MockProjectParentComponent
    >(TestResultsComponent, MockProjectParentComponent);
    testTestResults.configure({
      imports: [FontAwesomeModule]
    });
    testTestResults.initialise();
  });
  it("should create", () => {
    expect(testTestResults).toBeTruthy();
  });
  it("should receive an project as data input", () => {
    testTestResults.setParentProps({
      project: mockProjectOne
    });
    expect(testTestResults.instance.project).toEqual(mockProjectOne);
  });
  it("should call getFeatureTestStatus() and check class properties", () => {
    setPropsToZero(testTestResults.instance);
    testTestResults.instance.getFeatureTestStatus(mockProjectOne.features[0]);
    expect(testTestResults.instance.results.Failed).toEqual(2);
    expect(testTestResults.instance.results.Passed).toEqual(1);
    expect(testTestResults.instance.results.Undefined).toEqual(0);
    expect(testTestResults.instance.results.Pending).toEqual(0);
    expect(testTestResults.instance.totalTests).toEqual(3);
    expect(testTestResults.instance.yellow).toEqual("0%");
    expect(testTestResults.instance.green).toEqual("33.33%");
    expect(testTestResults.instance.grey).toEqual("0%");
    expect(testTestResults.instance.red).toEqual("66.66%");
    setPropsToZero(testTestResults.instance);
    testTestResults.instance.getFeatureTestStatus(mockProjectOne.features[1]);
    expect(testTestResults.instance.results.Failed).toEqual(0);
    expect(testTestResults.instance.results.Passed).toEqual(1);
    expect(testTestResults.instance.results.Undefined).toEqual(0);
    expect(testTestResults.instance.results.Pending).toEqual(1);
    expect(testTestResults.instance.totalTests).toEqual(2);
    expect(testTestResults.instance.yellow).toEqual("50%");
    expect(testTestResults.instance.green).toEqual("50%");
    expect(testTestResults.instance.grey).toEqual("0%");
    expect(testTestResults.instance.red).toEqual("0%");
  });
  it("should call totalNumber() and check class properties", () => {
    setPropsToZero(testTestResults.instance);
    testTestResults.instance.totalNumber(mockProjectOne);
    expect(testTestResults.instance.results.Failed).toEqual(2);
    expect(testTestResults.instance.results.Passed).toEqual(2);
    expect(testTestResults.instance.results.Undefined).toEqual(0);
    expect(testTestResults.instance.results.Pending).toEqual(1);
    expect(testTestResults.instance.totalTests).toEqual(5);
    expect(testTestResults.instance.yellow).toEqual("20%");
    expect(testTestResults.instance.green).toEqual("40%");
    expect(testTestResults.instance.grey).toEqual("0%");
    expect(testTestResults.instance.red).toEqual("40%");
  });
  it("should call calculatePercentages() and check correct pecentage is returned", () => {
    expect(testTestResults.instance.calculatePercentages(2, 4)).toEqual(50);
    expect(testTestResults.instance.calculatePercentages(1, 3)).toEqual(33.33);
    expect(testTestResults.instance.calculatePercentages(0, 3)).toEqual(0);
    expect(testTestResults.instance.calculatePercentages(44, 44)).toEqual(100);
  });
  
});
describe("Test results component feature input tests", () => {
  let testTestResults: IntegrationComponent<
    TestResultsComponent,
    MockFeatureParentComponent
  >;
  beforeEach(() => {
    testTestResults = new IntegrationComponent<
      TestResultsComponent,
      MockFeatureParentComponent
    >(TestResultsComponent, MockFeatureParentComponent);
    testTestResults.configure({
      imports: [FontAwesomeModule]
    });
    testTestResults.initialise();
  });
    

  it("should receive a feature as data input", () => {
    testTestResults.setParentProps({
      feature: mockFeatureOne
    })
    expect(testTestResults.instance.feature).toEqual(mockFeatureOne);
    expect(testTestResults.instance.results.Failed).toEqual(2);
    expect(testTestResults.instance.results.Passed).toEqual(1);
    expect(testTestResults.instance.results.Undefined).toEqual(0);
    expect(testTestResults.instance.results.Pending).toEqual(0);
    expect(testTestResults.instance.totalTests).toEqual(3);

    testTestResults.setParentProps({
      feature: mockFeatureTwo
    })
      expect(testTestResults.instance.feature).toEqual(mockFeatureTwo);
      expect(testTestResults.instance.results.Failed).toEqual(0);
      expect(testTestResults.instance.results.Passed).toEqual(2);
      expect(testTestResults.instance.results.Undefined).toEqual(0);
      expect(testTestResults.instance.results.Pending).toEqual(1);
      expect(testTestResults.instance.totalTests).toEqual(3);

  });


  it("should change the visual percentage bar when you change snapshots", () => {
    testTestResults.setProps({
      testsOpen: true
    })
    testTestResults.setParentProps({
      feature: mockFeatureOne
    })
    // are number of tests what theyre supposed to be NOW!!!
    let searchTerm: string = "Total: 3";
    expect(testTestResults.parentElement.textContent).toContain(searchTerm);
    testTestResults.setParentProps({
      feature: mockProjectFive.features[0]
    })
    searchTerm = "Total: 2";
    expect(testTestResults.parentElement.textContent).toContain(searchTerm);
  });
})