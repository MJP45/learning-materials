import { Component, OnInit, Input } from "@angular/core";
import { mockProjectOne, mockFeatureOne } from "src/assets/data/project-data";
import { IFeature, IProject, IScenario, ProjectService } from "src/app/services/project.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-feature-page',
  templateUrl: './feature-page.component.html',
  styleUrls: ['./feature-page.component.scss']
})
export class FeaturePageComponent implements OnInit {
  featureName: string;
  numberOfFeatures = "";
  numberOfScenarios = "<Number of Scenarios>";
  currentPage = 1;
  features: IFeature[];
  feature: IFeature = mockFeatureOne;
  filteredFeatures: IFeature[];
  project: IProject = mockProjectOne;
  isList = true;
  isViewingSnapshot: boolean = false;

  toggleView() {
    this.isList = !this.isList;
  }

  updateFeatureCount(count: string) {
    this.numberOfFeatures = count;
  }

  constructor(
    private projectService: ProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlProjectId = param.get("projectId");
      const urlFeatureId = param.get("featureId");

      this.projectService
        .fetchProjectByID(urlProjectId)
        .then((data: IProject) => {
          this.project = data;
          this.feature = this.project.features.find(
            (feature: IFeature) => feature.id === urlFeatureId
          );
        });
    });

    if (this.route.queryParams) {
      this.route.queryParams.subscribe(params => {
        if (params.isViewingSnapshot === 'true') {
          this.isViewingSnapshot = true;
        } else {
          this.isViewingSnapshot = false;
        }
      });
    }
  }

  handleFeatureSearch(searchText: string) {
    this.filteredFeatures = this.features.filter(feature => {
      return feature.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
