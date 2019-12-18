import { RouterTestingModule } from "@angular/router/testing";
import { ProjectsIndexContainerComponent } from "./projects-index-container.component";
import { TestComponent } from "@nology/angular-test-simplifier";
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { ProjectsListComponent } from "../projects-list/projects-list.component";
import { projects } from "src/assets/data/project-data";
import { IProject } from 'src/app/services/project.service';

describe("ProjectsIndexContainerComponent", () => {
  let projectsContainerTest: TestComponent<ProjectsIndexContainerComponent>;

  beforeEach(() => {
    projectsContainerTest = new TestComponent<ProjectsIndexContainerComponent>(
      ProjectsIndexContainerComponent
    );
    projectsContainerTest.configure({
      declarations: [ProjectsListComponent, SearchBarComponent],
      imports: [RouterTestingModule]
    });
    projectsContainerTest.initialise();
  });

  it("should create", () => {
    expect(projectsContainerTest).toBeTruthy();
  });

  it("should set correct projects when filterProjects is called", () => {
    let projectData: IProject[] = projects;
    projectsContainerTest.setProps({ projects: projectData });
    projectsContainerTest.instance.filterProjects(projectData[0].name);
    expect(projectsContainerTest.instance.filteredProjects[0]).toEqual(
      projectData[0]
    );
    projectsContainerTest.instance.filterProjects(projectData[1].name);
    expect(projectsContainerTest.instance.filteredProjects[0]).toEqual(
      projectData[1]
    );
  });

  it("should return more than one project when search term is broad", () => {
    let projectData: IProject[] = projects;
    projectsContainerTest.setProps({ projects: projectData });
    projectsContainerTest.instance.filterProjects("build");
    expect(projectsContainerTest.instance.filteredProjects.length).toEqual(4);
  });

  it("should return projects which have a scenario name that matches the search term", () =>{
    let projectData: IProject[] = projects;
    projectsContainerTest.setProps({ projects: projectData });
    projectsContainerTest.instance.filterProjects("Bank");
    expect(projectsContainerTest.instance.filteredProjects.length).toEqual(3);
  })

  it("should return all projects when an empty search term is submitted", () =>{
    let projectData: IProject[] = projects;
    projectsContainerTest.setProps({ projects: projectData });
    projectsContainerTest.instance.filterProjects("");
    expect(projectsContainerTest.instance.filteredProjects.length).toEqual(5);
  })
});
