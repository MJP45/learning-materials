import { Component, OnInit } from "@angular/core";
import { mockProjectOne } from "src/assets/data/project-data";
import { IFeature, IProject, ProjectService } from "src/app/services/project.service";
import { ActivatedRoute } from "@angular/router";
import { SnapshotService } from "src/app/services/snapshot.service";
import { mockDiff1, IDiff } from "src/app/services/snapshot-diff.service";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {
  projectName = "<Project Name>";
  featureName: string;
  numberOfFeatures: number;
  numberOfScenarios = "<Number of Scenarios>";
  currentPage = 1;
  features: IFeature[];
  feature: IFeature;
  filteredFeatures: IFeature[];
  project: IProject = mockProjectOne;
  diff: IDiff = mockDiff1;
  isList = true;
  showDiff = false;
  snapshots: string[] = [];
  createSnapshotIsClicked = false;
  isViewingSnapshot: boolean = false;

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private snapshotService: SnapshotService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      const urlId = param.get("projectId");
      this.projectService.fetchProjectByID(urlId).then((data: IProject) => {
        this.project = data;
        if (this.project) {
          this.feature = this.project.features[0];
          this.features = this.project.features;
          this.numberOfFeatures = this.project.features.length;
          this.filteredFeatures = this.features;
        }
        });
      this.getProjectSnapshots(urlId);
    });
  }

  dateSortDesc(date1, date2) {
    if (date1 > date2) return -1;
    if (date1 < date2) return 1;
    return 0;
  }

  getProjectSnapshots(projectId) {
    this.snapshotService.getSnapshotsForProject(projectId)
    .then(snapshots => {
      this.snapshots = snapshots.sort(this.dateSortDesc);
      // this.snapshots.unshift("Active Version");
    })
    .catch(err => console.log(err));
  }

  toggleView() {
    this.isList = !this.isList;
  }

  handleDiffButtonClick() {
    this.showDiff =!this.showDiff;
  }
  updateFeatureCount(count: number) {
    this.numberOfFeatures = count;
  }

  handleFeatureSearch(searchText: string) {
    this.filteredFeatures = this.features.filter(feature => {
      if (feature.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (this.searchFeatureScenarios(feature, searchText)) {
        return true;
      } else {
        return false;
      };
    });
  }

  searchFeatureScenarios(feature: IFeature, searchText: string): boolean {
    let scenarioFoundFeature: boolean[];
    scenarioFoundFeature = feature.scenarios.map(scenario => {
      return (scenario.name.toLowerCase().includes(searchText.toLowerCase()));
    })
    return scenarioFoundFeature.includes(true);
  }

  handleCreateSnapshot() {
    this.snapshotService.add(this.project.id, "diella")
    .then(result => {
      this.getProjectSnapshots(this.project.id);
      alert("Snapshot created")
    });
  }

  handleSnapShotSelected(selectedSnapshot: string) {
    
    this.snapshotService.getSnapshot(this.project.id, selectedSnapshot)
    .then(snapshot => {
      this.project = snapshot.project;
      this.filteredFeatures = snapshot.project.features;
      selectedSnapshot === "Active version" ? this.isViewingSnapshot = true : this.isViewingSnapshot = true;
    })
    .catch(err => console.log(err));
  }
}
