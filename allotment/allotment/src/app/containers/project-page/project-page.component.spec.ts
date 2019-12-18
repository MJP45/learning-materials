import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectPageComponent } from "./project-page.component";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { SummaryTitleComponent } from 'src/app/components/summary-title/summary-title.component';
import { SummaryDetailsComponent } from 'src/app/components/summary-details/summary-details.component';
import { TestResultsComponent } from 'src/app/components/test-results/test-results.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { ToggleSwitchComponent } from 'src/app/components/toggle-switch/toggle-switch.component';
import { ProjectFeaturesComponent } from 'src/app/components/project-features/project-features.component';
import { FeatureCardComponent } from 'src/app/components/feature-card/feature-card.component';
import { FeatureAccordionItemComponent } from 'src/app/components/feature-accordion-item/feature-accordion-item.component';
import { FeatureAccordionItemDetailsComponent } from 'src/app/components/feature-accordion-item-details/feature-accordion-item-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SnapshotSelectorComponent } from 'src/app/components/project/snapshot-selector/snapshot-selector.component';
import { DropdownComponent } from 'src/app/components/common/dropdown/dropdown.component';
import { DiffViewerComponent } from 'src/app/components/diff-viewer/diff-viewer.component';
import { mockDiff1 } from 'src/app/services/snapshot-diff.service';
import {
  TestComponent
} from "@nology/angular-test-simplifier";
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { IFeature } from 'src/app/services/project.service';
import { mockProjectOne } from 'src/assets/data/project-data';
import { FeatureStatusAndSignOffComponent } from 'src/app/components/common/feature-status-and-sign-off/feature-status-and-sign-off.component';

describe("ProjectPageComponent", () => {
  let testProject: TestComponent<ProjectPageComponent>;

  beforeEach(() => {
    testProject = new TestComponent<
    ProjectPageComponent>(ProjectPageComponent);
    testProject.configure({
      declarations:[SummaryTitleComponent,
        SummaryDetailsComponent,
        TestResultsComponent,
        SearchBarComponent,
        ToggleSwitchComponent,
        ProjectFeaturesComponent,
        FeatureCardComponent,
        FeatureAccordionItemComponent,
        FeatureAccordionItemDetailsComponent,
        BreadcrumbComponent,
        SnapshotSelectorComponent,
        DropdownComponent,
        DiffViewerComponent,
        FeatureStatusAndSignOffComponent ],
        imports: [FontAwesomeModule, RouterTestingModule],
        providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    });
    testProject.initialise();  
  });

  it("should create", () => {
    expect(testProject).toBeTruthy();
  });

  it("should render the number of new features", () => {
    expect(testProject.element.textContent).toContain(mockDiff1.new.addedFeatures.length);
  });
  it("should render the number of old features", () => {
    expect(testProject.element.textContent).toContain(mockDiff1.old.removedFeatures.length);
  });
  
  it("should toggle the value of showDiff when clicked button click", () => {
    testProject.instance.showDiff = false;
    testProject.triggerEvent("button#diff-toggle", "click");
    expect(testProject.instance.showDiff).toBeTruthy();
    testProject.triggerEvent("button#diff-toggle", "click");
    expect(testProject.instance.showDiff).toBeFalsy();
  });

  it("should return features where the search term is included in the feature name", () => {
    let featureData: IFeature[] = mockProjectOne.features;
    testProject.setProps({ features: featureData });
    testProject.instance.handleFeatureSearch("deposit");
    expect(testProject.instance.filteredFeatures.length).toEqual(1);
  });

  it("should return features where the search term is included in any of that features scenarios name", () => {
    let featureData: IFeature[] = mockProjectOne.features;
    testProject.setProps({ features: featureData });
    testProject.instance.handleFeatureSearch("overdrawn");
    expect(testProject.instance.filteredFeatures.length).toEqual(1);
  });
});
