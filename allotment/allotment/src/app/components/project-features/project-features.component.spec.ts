import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { ProjectFeaturesComponent } from "./project-features.component";
import { FeatureAccordionItemComponent } from "../feature-accordion-item/feature-accordion-item.component";
import { FeatureCardComponent } from "../feature-card/feature-card.component";
import { mockProjectOne, mockScenarioOne } from "../../../assets/data/project-data";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FeatureAccordionItemDetailsComponent } from "../feature-accordion-item-details/feature-accordion-item-details.component";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { RouterTestingModule } from "@angular/router/testing";
import { IFeature } from 'src/app/services/project.service';
import { FeatureStatusAndSignOffComponent } from '../common/feature-status-and-sign-off/feature-status-and-sign-off.component';

@Component({
  template:
    '<app-project-features [isList]="isList" [features]="features" [featureTitleFontSize]="featureTitleFontSize" (featureCountChange)="testFunc()" (handleScenarioClick)="testFunc($event)"></app-project-features>'
})
class MockParentComponent {
  isList: boolean;
  features: IFeature[] = mockProjectOne.features;
  featureTitleFontSize: number =20;
  testFunc(input: any) {
    return input;
  }
}

describe("Project features Integration Tests", () => {
  let testProjectFeaturesComponent: IntegrationComponent<ProjectFeaturesComponent, MockParentComponent>;

  beforeEach(() => {
    testProjectFeaturesComponent = new IntegrationComponent<ProjectFeaturesComponent, MockParentComponent>(
      ProjectFeaturesComponent,
      MockParentComponent
    );
    testProjectFeaturesComponent.configure({
      declarations: [FeatureAccordionItemComponent, FeatureCardComponent, FeatureAccordionItemDetailsComponent, FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    });
    testProjectFeaturesComponent.initialise();
  });

  it("should create", () => {
    expect(testProjectFeaturesComponent).toBeTruthy();
  });

  it("should read the isList property as passed down from the parent component", () => {
    testProjectFeaturesComponent.setParentProps({
      isList: true
    });
    expect(testProjectFeaturesComponent.instance.isList).toEqual(true);
    testProjectFeaturesComponent.setParentProps({
      isList: false
    });
    expect(testProjectFeaturesComponent.instance.isList).toEqual(false);
  });

  it("should read the featureTitleFontSize from the parent", () => {
    expect(testProjectFeaturesComponent.instance.featureTitleFontSize).toEqual(20);
    testProjectFeaturesComponent.setParentProps({
      featureTitleFontSize: 14
    });
    expect(testProjectFeaturesComponent.instance.featureTitleFontSize).toEqual(14);
  });

});
