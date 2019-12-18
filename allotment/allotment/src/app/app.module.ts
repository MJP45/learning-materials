import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { SummaryTitleComponent } from "./components/summary-title/summary-title.component";
import { SummaryDetailsComponent } from "./components/summary-details/summary-details.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ProjectsListComponent } from "./components/projects-list/projects-list.component";
import { TestResultsComponent } from "./components/test-results/test-results.component";
import { FeatureAccordionItemComponent } from "./components/feature-accordion-item/feature-accordion-item.component";
import { FeatureAccordionItemDetailsComponent } from "./components/feature-accordion-item-details/feature-accordion-item-details.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FeatureScenariosComponent } from "./components/sc-list/feature-scenarios/feature-scenarios.component";
import { ToggleSwitchComponent } from "./components/toggle-switch/toggle-switch.component";
import { FeatureCardComponent } from "./components/feature-card/feature-card.component";
import { ProjectService } from "./services/project.service";
import { SnapshotSelectorComponent } from "./components/project/snapshot-selector/snapshot-selector.component";
import { DropdownComponent } from "./components/common/dropdown/dropdown.component";
import { ActivatedRouteStub } from "./services/mock-router.service";
import { FormsModule } from '@angular/forms';
import { ProjectFeaturesComponent } from './components/project-features/project-features.component';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';
import { UserLoginPageComponent } from './components/user-login-page/user-login-page.component';
import { ScenarioCardComponent } from './components/sc-list/scenario-card/scenario-card.component';
import { ScenarioCardContainerComponent } from './components/sc-list/scenario-card-container/scenario-card-container.component';
import { ScenarioAccordionItemComponent } from './components/sc-list/scenario-accordion-item/scenario-accordion-item.component';
import { ScenarioAccordionComponent } from './components/sc-list/scenario-accordion/scenario-accordion.component';
import { FeaturePageComponent } from './containers/feature-page/feature-page.component';
import { ProjectsIndexContainerComponent } from './components/projects-index-container/projects-index-container.component';
import { ProjectsIndexPageComponent } from './containers/projects-index-page/projects-index-page.component';
import { AppRegistrationPageComponent } from './components/app-registration-page/app-registration-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { ProjectPageComponent } from './containers/project-page/project-page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DiffViewerComponent } from './components/diff-viewer/diff-viewer.component';
import { FeatureStatusAndSignOffComponent } from './components/common/feature-status-and-sign-off/feature-status-and-sign-off.component';


@NgModule({
  declarations: [
    AppComponent,
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
    UserLoginPageComponent,
    UserRegistrationPageComponent,
    AppRegistrationPageComponent,
    ProjectPageComponent,
    FeaturePageComponent,
    ProjectsIndexPageComponent,
    NotFoundPageComponent,
    FeatureAccordionItemDetailsComponent,
    FeatureCardComponent,
    FeatureAccordionItemComponent,
    ProjectFeaturesComponent,
    UserRegistrationPageComponent,
    UserLoginPageComponent,
    ScenarioCardComponent,
    ScenarioCardContainerComponent,
    ScenarioAccordionItemComponent,
    ScenarioAccordionComponent,
    FeatureScenariosComponent,
    FeaturePageComponent,
    ProjectsIndexContainerComponent,
    ProjectsIndexPageComponent,
    AppRegistrationPageComponent,
    ProjectPageComponent,
    BreadcrumbComponent,
    DiffViewerComponent,
    FeatureStatusAndSignOffComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [ProjectService, ActivatedRouteStub],
  bootstrap: [AppComponent]
})
export class AppModule {}
