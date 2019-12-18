import { ProjectsListComponent } from "./../../components/projects-list/projects-list.component";
import { SearchBarComponent } from "./../../components/search-bar/search-bar.component";
import { ProjectsIndexContainerComponent } from "./../../components/projects-index-container/projects-index-container.component";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ProjectsIndexPageComponent } from "./projects-index-page.component";
import { ActivatedRoute } from "@angular/router";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { RouterTestingModule } from "@angular/router/testing";
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';

describe("ProjectsIndexPageComponent", () => {
  let component: ProjectsIndexPageComponent;
  let fixture: ComponentFixture<ProjectsIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProjectsIndexPageComponent,
        ProjectsIndexContainerComponent,
        SearchBarComponent,
        ProjectsListComponent,
        BreadcrumbComponent
      ],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
