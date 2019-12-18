import { Component, OnInit, Input } from "@angular/core";
import { mockProjectOne } from "src/assets/data/project-data";
import { ActivatedRoute } from "@angular/router";
import { IProject} from 'src/app/services/project.service';

@Component({
  selector: "app-projects-list",
  templateUrl: "./projects-list.component.html",
  styleUrls: ["./projects-list.component.scss"]
})
export class ProjectsListComponent implements OnInit {
  @Input() projects: IProject;
  greenThreshold: number = 100;
  amberThreshold: number = 50;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}

  getProjectById(id: string): IProject {
    return mockProjectOne;
  }

  getNumScenarios(project: IProject): number {
    let num: number = 0;
    project.features.forEach(feature => {
      num += feature.scenarios.length;
    });
    return num;
  }

  getNumTestPassed(project: IProject): number {
    let num: number = 0;
    project.features.forEach(feature => {
      num += feature.scenarios.filter(scenario => {
        return scenario.testStatus === "Passed";
      }).length;
    });
    return num;
  }

  getPctTestPassed(project: IProject): number {
    return (this.getNumTestPassed(project) / this.getNumScenarios(project)) * 100;
  }
}
