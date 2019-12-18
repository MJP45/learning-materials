

import { DiffViewerComponent } from './diff-viewer.component';
import { mockDiff1, IDiff } from 'src/app/services/snapshot-diff.service';
import { IntegrationComponent } from '@nology/angular-test-simplifier';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/app/services/mock-router.service';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectFeaturesComponent } from '../project-features/project-features.component';
import { FeatureAccordionItemComponent } from '../feature-accordion-item/feature-accordion-item.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { FeatureAccordionItemDetailsComponent } from '../feature-accordion-item-details/feature-accordion-item-details.component';
import { FeatureStatusAndSignOffComponent } from '../common/feature-status-and-sign-off/feature-status-and-sign-off.component';

@Component({
  template:
    '<app-diff-viewer [diff]="diff"></app-diff-viewer>'
})

class MockParentComponent {
  showDiff:boolean=false;
  diff: IDiff= mockDiff1;
  featureTitleFontSize: String;

  testFunc(input: any) {
    return input;
  }
}
describe("Diff viewer Integration Tests", () => {
  let testDiffViewer: IntegrationComponent<DiffViewerComponent, MockParentComponent>;

  beforeEach(() => {
    testDiffViewer = new IntegrationComponent<DiffViewerComponent, MockParentComponent>(
      DiffViewerComponent,
      MockParentComponent
    );
    testDiffViewer.configure({
      declarations: [ProjectFeaturesComponent, FeatureAccordionItemComponent, FeatureCardComponent,FeatureAccordionItemDetailsComponent, FeatureStatusAndSignOffComponent],
      imports: [RouterTestingModule, FontAwesomeModule],
      providers: [{ provide: ActivatedRoute, useClass: ActivatedRouteStub }]
    });
    testDiffViewer.initialise();
  })

  it("should create", () => {
    expect(testDiffViewer).toBeTruthy();
  });

  it("should read the diff property as passed down from the parent component", () => {
    testDiffViewer.setParentProps({
      diff: mockDiff1
    });
    expect(testDiffViewer.instance.diff).toEqual(mockDiff1);
  });

  it("should render the snapshot creator", () => {
    testDiffViewer.setParentProps({
      oldSnapshotCreator: mockDiff1.old.snapshot.createdBy,
      newSnapshotCreator: mockDiff1.new.snapshot.createdBy
    });
    expect(testDiffViewer.parentElement.textContent).toContain(
      mockDiff1.old.snapshot.createdBy
    );
    expect(testDiffViewer.parentElement.textContent).toContain(
      mockDiff1.new.snapshot.createdBy
    );
  });

  it("should render the snapshot time", () => {
    testDiffViewer.setParentProps({
      oldSnapshotCreator: mockDiff1.old.snapshot.dateTime,
      newSnapshotCreator: mockDiff1.new.snapshot.dateTime
    });
    expect(testDiffViewer.parentElement.textContent).toContain(
      mockDiff1.old.snapshot.dateTime
    );
    expect(testDiffViewer.parentElement.textContent).toContain(
      mockDiff1.new.snapshot.dateTime
    );
  });

}); 
