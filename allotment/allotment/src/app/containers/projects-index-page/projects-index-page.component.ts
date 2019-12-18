import { Component, OnInit } from "@angular/core";
import { IScenario, IProject, IFeature, ProjectService } from "src/app/services/project.service";

@Component({
  selector: 'app-projects-index-page',
  templateUrl: './projects-index-page.component.html',
  styleUrls: ['./projects-index-page.component.scss']
})
export class ProjectsIndexPageComponent implements OnInit {
  projectName = "<Project Name>";
  featureName: string;
  numberOfFeatures = "";
  numberOfScenarios = "<Number of Scenarios>";
  currentPage = 1;
  features: IFeature[];
  feature: IFeature;
  filteredFeatures: IFeature[];
  project: IProject;
  isList = true;

  showScenario(scenario: IScenario) {
    
  }

  toggleView() {
    this.isList = !this.isList
  }

  updateFeatureCount(count: string) {
    this.numberOfFeatures = count;
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.fetchProjectByID("1").then((data: IProject) => {
      this.project = data;
      this.feature = data.features[0];
      this.features = data.features;
      this.filteredFeatures = this.features;
    });
  }

  handleFeatureSearch(searchText: string) {
    this.filteredFeatures = this.features.filter(feature => {
      return feature.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
