import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ScenarioAccordionItemComponent } from "./../../components/sc-list/scenario-accordion-item/scenario-accordion-item.component";
import { ScenarioCardContainerComponent } from "./../../components/sc-list/scenario-card-container/scenario-card-container.component";
import { ScenarioCardComponent } from "./../../components/sc-list/scenario-card/scenario-card.component";
import { ScenarioAccordionComponent } from "./../../components/sc-list/scenario-accordion/scenario-accordion.component";
import { ToggleSwitchComponent } from "./../../components/toggle-switch/toggle-switch.component";
import { TestResultsComponent } from "./../../components/test-results/test-results.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FeaturePageComponent } from "./feature-page.component";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { SummaryTitleComponent } from "src/app/components/summary-title/summary-title.component";
import { SummaryDetailsComponent } from "src/app/components/summary-details/summary-details.component";
import { FeatureScenariosComponent } from "src/app/components/sc-list/feature-scenarios/feature-scenarios.component";
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { FeatureStatusAndSignOffComponent } from 'src/app/components/common/feature-status-and-sign-off/feature-status-and-sign-off.component';


describe("FeaturePageComponent", () => {
  let component: FeaturePageComponent;
  let fixture: ComponentFixture<FeaturePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FeaturePageComponent,
        SummaryTitleComponent,
        SummaryDetailsComponent,
        TestResultsComponent,
        FeatureScenariosComponent,
        ToggleSwitchComponent,
        ScenarioAccordionComponent,
        ScenarioCardComponent,
        ScenarioCardContainerComponent,
        ScenarioAccordionItemComponent,
        BreadcrumbComponent,
        FeaturePageComponent,
        SearchBarComponent,
        FeatureStatusAndSignOffComponent
      ],
      imports: [FontAwesomeModule, RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    it("should create", () => {
      expect(component).toBeTruthy();
    });
});
