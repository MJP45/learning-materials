import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms';
import { TestComponent } from "@nology/angular-test-simplifier";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsIndexContainerComponent } from "./components/projects-index-container/projects-index-container.component";
import { SummaryTitleComponent } from "./components/summary-title/summary-title.component";
import { SummaryDetailsComponent } from "./components/summary-details/summary-details.component";
import { TestResultsComponent } from "./components/test-results/test-results.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { ToggleSwitchComponent } from "./components/toggle-switch/toggle-switch.component";
import { ProjectFeaturesComponent } from "./components/project-features/project-features.component";
import { ProjectsListComponent } from "./components/projects-list/projects-list.component";
import { FeatureAccordionItemComponent } from "./components/feature-accordion-item/feature-accordion-item.component";
import { FeatureAccordionItemDetailsComponent } from "./components/feature-accordion-item-details/feature-accordion-item-details.component";
import { FeatureScenariosComponent } from "./components/sc-list/feature-scenarios/feature-scenarios.component";
import { ScenarioAccordionComponent } from "./components/sc-list/scenario-accordion/scenario-accordion.component";
import { ScenarioAccordionItemComponent } from "./components/sc-list/scenario-accordion-item/scenario-accordion-item.component";
import { ScenarioCardContainerComponent } from "./components/sc-list/scenario-card-container/scenario-card-container.component";
import { ScenarioCardComponent } from "./components/sc-list/scenario-card/scenario-card.component";
import { FeatureCardComponent } from "./components/feature-card/feature-card.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProjectsIndexPageComponent } from "./containers/projects-index-page/projects-index-page.component";
import { FeaturePageComponent } from "./containers/feature-page/feature-page.component";
import { NotFoundPageComponent } from "./containers/not-found-page/not-found-page.component";
import { ProjectPageComponent } from "./containers/project-page/project-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { SnapshotSelectorComponent } from "./components/project/snapshot-selector/snapshot-selector.component";
import { DropdownComponent } from "./components/common/dropdown/dropdown.component";
import { UserLoginPageComponent } from './components/user-login-page/user-login-page.component';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';
import { AppRegistrationPageComponent } from './components/app-registration-page/app-registration-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DiffViewerComponent } from './components/diff-viewer/diff-viewer.component';
import { FeatureStatusAndSignOffComponent } from './components/common/feature-status-and-sign-off/feature-status-and-sign-off.component';


describe("AppComponent", () => {
  let component: TestComponent<AppComponent>;
  beforeEach(() => {
    component = new TestComponent<AppComponent>(AppComponent);
    component.configure({
      declarations: [
        AppComponent,
        UserLoginPageComponent,
        UserRegistrationPageComponent,
        ProjectFeaturesComponent,
        SummaryTitleComponent,
        SummaryDetailsComponent,
        NavbarComponent,
        ProjectsIndexContainerComponent,
        ProjectsListComponent,
        TestResultsComponent,
        FeatureAccordionItemComponent,
        FeatureAccordionItemDetailsComponent,
        FeatureScenariosComponent,
        ScenarioAccordionComponent,
        ScenarioAccordionItemComponent,
        SearchBarComponent,
        ToggleSwitchComponent,
        ScenarioCardContainerComponent,
        ScenarioCardComponent,
        FeatureCardComponent,
        SnapshotSelectorComponent,
        DropdownComponent,
        ProjectPageComponent,
        AppRegistrationPageComponent,
        ProjectsIndexPageComponent,
        FeaturePageComponent,
        NotFoundPageComponent,
        BreadcrumbComponent,
        DiffViewerComponent,
        FeatureStatusAndSignOffComponent 
      ],
      imports: [FontAwesomeModule, AppRoutingModule, FormsModule]
    });
    component.initialise();
  });
  it("should create", () => {
    expect(component).toBeTruthy();
  });
});

