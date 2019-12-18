import { FeatureAccordionItemComponent } from "./feature-accordion-item.component";
import { Component } from "@angular/core";
import {
  mockProjectOne,
  mockScenarioOne
} from "src/assets/data/project-data";
import {
  TestComponent,
  IntegrationComponent
} from "@nology/angular-test-simplifier";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FeatureAccordionItemDetailsComponent } from "../feature-accordion-item-details/feature-accordion-item-details.component";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { IFeature} from 'src/app/services/project.service';
import { FeatureStatusAndSignOffComponent } from '../common/feature-status-and-sign-off/feature-status-and-sign-off.component';
import { FeaturePageComponent } from 'src/app/containers/feature-page/feature-page.component';

@Component({
  template: `<app-feature-accordion-item
      [feature]="feature"
      [featureTitleFontSize]="featureTitleFontSize"
      (handleScenarioClick)="testFunc()"
    ></app-feature-accordion-item>
  `
})
class MockParentComponent {
  features: IFeature[] = mockProjectOne.features;
  feature: IFeature = this.features[0];
  featureTitleFontSize: number = 20;
  testFunc(input: any) {
    return input;
  }
}

describe("Acc Piece Component", () => {
  let testAccPiece: IntegrationComponent<
    FeatureAccordionItemComponent,
    MockParentComponent
  >;

  beforeEach(() => {
    testAccPiece = new IntegrationComponent<
      FeatureAccordionItemComponent,
      MockParentComponent
    >(FeatureAccordionItemComponent, MockParentComponent);

    testAccPiece.configure({
      declarations: [FeatureAccordionItemDetailsComponent, FeatureStatusAndSignOffComponent],
      imports: [FontAwesomeModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    });

    testAccPiece.initialise();
  });

  it("should create", () => {
    expect(testAccPiece).toBeTruthy();
  });

  it("should receive an IFeature as data input", () => {
    testAccPiece.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testAccPiece.instance.feature).toEqual(mockProjectOne.features[0]);

    testAccPiece.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testAccPiece.instance.feature).toEqual(mockProjectOne.features[0]);
  });

  it("should read the featureTitleFontSize from the parent", () => {
    expect(testAccPiece.instance.featureTitleFontSize).toEqual(20);
    testAccPiece.setParentProps({
      featureTitleFontSize: 14
    });
    expect(testAccPiece.instance.featureTitleFontSize).toEqual(14);
  });

  it("should render the feature name", () => {
    testAccPiece.setParentProps({
      feature: mockProjectOne.features[0]
    });
    expect(testAccPiece.parentElement.textContent).toContain(
      mockProjectOne.features[0].name
    );

    testAccPiece.setParentProps({
      feature: mockProjectOne.features[1]
    });

    expect(testAccPiece.parentElement.textContent).toContain(
      mockProjectOne.features[1].name
    );
  });

  it("should render the feature test status", () => {
    testAccPiece.setProps({
      feature: mockProjectOne.features[0]
    });
    expect(testAccPiece.parentElement.textContent).toContain("Pending sign off");

    testAccPiece.setProps({
      feature: mockProjectOne.features[1]
    });
    expect(testAccPiece.parentElement.textContent).toContain("Pending sign off");
  });

  

  it("should output the scenario", () => {
    const spy = spyOn(testAccPiece.parentInstance, "testFunc");
    expect(spy).toHaveBeenCalledTimes(0);
    testAccPiece.instance.handleClick(mockScenarioOne);
    expect(spy).toHaveBeenCalledTimes(1);
    testAccPiece.instance.handleClick(mockScenarioOne);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
