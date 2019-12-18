import { Injectable } from "@angular/core";
import { mockSnapShotOne, mockSnapShotTwo } from "src/assets/data/project-data";
import { IProject, ProjectService } from "./project.service";

export interface ISnapshot {
  dateTime: string;
  createdBy: string;
  project: IProject;
}

@Injectable({
  providedIn: "root"
})
export class SnapshotService {
  snapshots = [
    {
      projectId: "1",
      snapshots: [mockSnapShotOne, mockSnapShotTwo]
    },
    {
      projectId: "DEF",
      snapshots: [mockSnapShotOne, mockSnapShotTwo]
    },
    {
      projectId: "GHI",
      snapshots: []
    },
    {
      projectId: "jkl",
      snapshots: []
    },
    {
      projectId: "mno",
      snapshots: []
    },
  ];

  constructor(private projectService: ProjectService) {}

  getSnapshotsForProject(projectId: string): Promise<string[]> {
    const projectSelected = this.snapshots.find(project => project.projectId === projectId);
    if (projectSelected) {
      return new Promise<string[]>(resolve => {
        resolve(projectSelected.snapshots.map(snapshot => {
          return snapshot.dateTime
        }));
      });
    } else return new Promise<string[]>(resolve => []);
  }

  getSnapshot(projectId: string, dateTime: string): Promise<ISnapshot> {
    const projectSelected = this.snapshots.find(project => project.projectId === projectId);

    return new Promise<ISnapshot>(resolve => {
      resolve(projectSelected.snapshots.find(snapshot => snapshot.dateTime === dateTime));
    });
  }

  add(projectId: string, createdBy: string): Promise<boolean> {
    return this.projectService.fetchProjectByID(projectId).then(project => {
      const snapshot: ISnapshot = {
        dateTime: new Date().toLocaleString("en-GB"),
        createdBy: createdBy,
        project: project
      };
      const projectSelected = this.snapshots.find(project => project.projectId === projectId);
      projectSelected.snapshots.push(snapshot);
      return new Promise<boolean>(resolve => resolve(true));
    });
  }
}