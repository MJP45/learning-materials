import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsIndexPageComponent } from './containers/projects-index-page/projects-index-page.component';
import { ProjectPageComponent } from './containers/project-page/project-page.component';
import { FeaturePageComponent } from './containers/feature-page/feature-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { UserLoginPageComponent } from './components/user-login-page/user-login-page.component';
import { UserRegistrationPageComponent } from './components/user-registration-page/user-registration-page.component';
import { AppRegistrationPageComponent } from './components/app-registration-page/app-registration-page.component'

const routes: Routes = [
  { path: "home", component: ProjectsIndexPageComponent },
  { path: "login", component: UserLoginPageComponent },
  { path: "user-registration", component: UserRegistrationPageComponent },
  { path: "projects/:projectId", component: ProjectPageComponent },
  { path: "projects/:projectId/features/:featureId", component: FeaturePageComponent },
  { path: "app-registration", component: AppRegistrationPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "404", component: NotFoundPageComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
