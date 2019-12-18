import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { ProjectsListComponent } from "./projects-list.component";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ActivatedRouteStub } from "src/app/services/mock-router.service";
import { IProject } from 'src/app/services/project.service';
import { projects } from 'src/assets/data/project-data';

@Component({
  template: '<app-projects-list [projects]="projects"></app-projects-list>'
})
class parentComponent {
  projects: IProject[] = projects;
}

describe("ProjectsListComponent", () => {
  let ProjectPageComponentTest: IntegrationComponent<
    ProjectsListComponent,
    parentComponent
  >;

  beforeEach(() => {
    ProjectPageComponentTest = new IntegrationComponent<
      ProjectsListComponent,
      parentComponent
    >(ProjectsListComponent, parentComponent);
    ProjectPageComponentTest.configure({
      imports: [RouterTestingModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    });
    ProjectPageComponentTest.initialise();
  });

  it("should create", () => {
    expect(ProjectPageComponentTest).toBeTruthy();
  });

  it("should expect a project of type IProject", () => {
    ProjectPageComponentTest.setParentProps({
      projects: projects
    });
    expect(ProjectPageComponentTest.instance.projects[0]).toEqual(projects[0]);

    ProjectPageComponentTest.setParentProps({
      projects: projects
    });
    expect(ProjectPageComponentTest.instance.projects[0]).toEqual(projects[0]);
  });

  it("should return the number of scenarios based on the total scenarios in a project", () => {
    let scenarioCount: number = 0;
    projects[0].features.forEach(feature => {
      scenarioCount += feature.scenarios.length;
    });
    let num: number = ProjectPageComponentTest.instance.getNumScenarios(
      projects[0]
    );
    expect(scenarioCount).toEqual(num);
  });

  it("should return the number of tests passed based the all scenarios in a project", () => {
    let testsPassed: number = 0;
    projects[0].features.forEach(feature => {
      testsPassed += feature.scenarios.filter(scenario => {
        return scenario.testStatus === "Passed";
      }).length;
    });
    let num: number = ProjectPageComponentTest.instance.getNumTestPassed(
      projects[0]
    );
    expect(testsPassed).toEqual(num);
  });

  it("should calculate the percentage for the number of tests passed versus the number of scenarios", () => {
    const result =
      (ProjectPageComponentTest.instance.getNumTestPassed(projects[0]) /
        ProjectPageComponentTest.instance.getNumScenarios(projects[0])) *
      100;
    let percentage = ProjectPageComponentTest.instance.getPctTestPassed(projects[0]);
    expect(percentage).toEqual(result);
  });

  it("should render the project name", () => {
    ProjectPageComponentTest.setParentProps({
      projects: projects
    });
    expect(ProjectPageComponentTest.parentElement.textContent).toContain(
      projects[1].name
    );
    expect(ProjectPageComponentTest.parentElement.textContent).toContain(
      projects[0].name
    );
  });

  it("should render the number of project features based on length", () => {
    ProjectPageComponentTest.setParentProps({
      projects: projects
    });
    expect(ProjectPageComponentTest.parentElement.textContent).toContain(projects[0].features.length);
  });

  it("should render the status of a project", () => {
    ProjectPageComponentTest.setParentProps({
      projects: projects
    });
    expect(ProjectPageComponentTest.parentElement.textContent).toContain(projects[1].status);
  });

  it("should apply a green/red/amber class based on tests passed", () => {
    ProjectPageComponentTest.setParentProps({
      projects: [projects[4]]
    })
    expect(ProjectPageComponentTest.query("span").getAttribute("class")).toEqual("green");
    ProjectPageComponentTest.setParentProps({
      projects: [projects[0]]
    })
    expect(ProjectPageComponentTest.query("span").getAttribute("class")).toEqual("red");
    ProjectPageComponentTest.setParentProps({
      projects: [projects[3]]
    })
    expect(ProjectPageComponentTest.query("span").getAttribute("class")).toEqual("amber");
  });
});
