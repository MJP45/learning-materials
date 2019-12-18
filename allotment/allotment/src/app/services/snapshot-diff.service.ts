import { Injectable } from '@angular/core';
import { ISnapshot } from './snapshot.service';
import { IFeature } from './project.service';
import { mockSnapShotOne, mockProjectOneSn1, mockSnapShotTwo, mockProjectOneSn2 } from 'src/assets/data/project-data';


export interface IDiff {
  new: {
    snapshot: ISnapshot;
    addedFeatures: IFeature[];
  },
  old: {
    snapshot: ISnapshot;
    removedFeatures: IFeature[];
  }
  commonFeatures: IFeature[]
}

export const mockDiff1: IDiff = {
  new: {
    snapshot: mockSnapShotOne,
    addedFeatures: [mockProjectOneSn1.features[0]]
  },
  old: {
    snapshot: mockSnapShotTwo,
    removedFeatures: [mockProjectOneSn2.features[0]]
  },
  commonFeatures: [mockProjectOneSn1.features[1]]
}

// enum diffType{
//   Deleted,
//   New,
//   Unchanged
// }
// interface diffWrapper{
//   type: "DELETED" | "NEW" | "UNCHANGED";
//   feature: IFeature;
// }


@Injectable({
  providedIn: 'root'
})
export class SnapshotDiffService {

  allFeatures: IFeature[] = [];

  constructor() { }

  //This logic can be moved to Java when API is created. 
  // findDifferentFeatures(listToSearch: IFeature[], listToIterateThrough: IFeature[]): IFeature[] {
  //   let uniqueFeatures: IFeature[] = [];
  //   listToIterateThrough.filter(singleFeature => {
  //     listToSearch.forEach(singleFeatureToCheck => {
  //       if (singleFeature.name !== singleFeatureToCheck.name) {
  //         uniqueFeatures.push(singleFeature);
  //       }
  //     });
  //     return
  //   });
  //   return uniqueFeatures;
  // }

}
