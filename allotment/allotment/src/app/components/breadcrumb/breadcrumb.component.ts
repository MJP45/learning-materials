import { Component, OnInit } from '@angular/core';
import { IFeature, IProject } from 'src/app/services/project.service';
import { ProjectService } from "src/app/services/project.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  feature: IFeature;
  featureName: String;
  project: IProject;
  projectName: String;
  featureUrl: String;
  projectUrl: String;
  projectExists: boolean = false;

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlProjectId = param.get("projectId");
      const urlFeatureId = param.get("featureId");

      if (urlProjectId !== null) {
        this.projectService
        .fetchProjectByID(urlProjectId)
        .then((data: IProject) => {
          this.project = data;
          if (urlFeatureId !== null) {
            this.feature = this.project.features.find((feature: IFeature) => {
              return feature.id === urlFeatureId;
            });
            this.featureName = ` ${this.feature.name}`;
            this.featureUrl = `/projects/${urlProjectId}/features/${urlFeatureId}`;
          } else {
            this.featureName = "";
          }
          this.projectExists = true;
          this.projectName = `${this.project.name}`;
          this.projectUrl = `/projects/${urlProjectId}`;
        });
      } else {
        this.projectExists = false;
        this.projectName = "";
      }
    });
  }
}
