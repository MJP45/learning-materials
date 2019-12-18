import { Component, OnInit } from "@angular/core";
import { IProject, IFeature } from 'src/app/services/project.service';
import { ProjectService } from "src/app/services/project.service";

@Component({
  selector: 'app-projects-index-container',
  templateUrl: './projects-index-container.component.html',
  styleUrls: ['./projects-index-container.component.scss']
})
export class ProjectsIndexContainerComponent implements OnInit {
  projects: IProject[];
  filteredProjects: IProject[] = this.projects;
  placeholderText: string = "Search For projects or features";

  constructor(private projectService: ProjectService) {
    this.projectService.fetchProjects().then((data: IProject[]) => {
      this.projects = data;
      this.filteredProjects = this.projects;
    });
  }

  ngOnInit() {}

  filterProjects(searchText: string) {
    if (searchText.trim() === "") this.filteredProjects = this.projects;
    
    this.filteredProjects = this.projects.filter(project => {
      if (project.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      } else if (this.searchProjectFeatures(project, searchText)) {
        return true;
      } else {
        return false;
      };
  });
  }
  
  searchProjectFeatures(project: IProject, searchText: string): boolean {
    let featureFoundProject: boolean[];
    featureFoundProject = project.features.map(feature => {
      return (feature.name.toLowerCase().includes(searchText.toLowerCase()));
    })
    return featureFoundProject.includes(true);
  }

}
