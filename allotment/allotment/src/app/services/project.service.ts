import { Injectable } from "@angular/core";
import { projects } from "src/assets/data/project-data";

export interface IProject {
  name: string;
  id: string;
  features: IFeature[];
  status: "Production" | "UAT" | "Development" | "SIT" | "Planning";
}

export interface IFeature {
  name: string;
  id: string;
  description: string;
  status: "In development" | "Complete" | "Pending sign off";
  scenarios: IScenario[];
}

export interface IScenario {
  name: string;
  steps: IStep[];
  testStatus: "Passed" | "Failed" | "Pending" | "Undefined";
}

export interface IStep {
  text: string;
  keyword: string;
}

export interface IUser {
  userId: string;
  firstName: string;
  lastName: string;
}

export interface IRegisteredProject {
  appName: string;
  bitBucketName: string;
  date: string;
  token: string;
}

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor() {}

  fetchProjects() {
    return new Promise((resolve, reject) => {
      resolve(projects);
    });
  }

  fetchProjectByID(searchId: string): Promise<IProject> {
    return new Promise((resolve, reject) => {
      resolve(this.findProject(searchId));
    });
  }

  private findProject(searchId: string): IProject {
    let projectFound: IProject;
    projects.forEach((project: IProject) => {
      if (project.id === searchId) {
        projectFound = project;
      }
    });
    return projectFound;
  }
};
