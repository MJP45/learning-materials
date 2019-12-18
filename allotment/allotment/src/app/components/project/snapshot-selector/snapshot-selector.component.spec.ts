import { SnapshotSelectorComponent } from "./snapshot-selector.component";
import { RouterTestingModule } from "@angular/router/testing";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { TestComponent, IntegrationComponent} from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { Mock } from "protractor/built/driverProviders";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from '../../common/dropdown/dropdown.component';
import { mockProjectOne, mockSnapShotOne } from 'src/assets/data/project-data';

@Component({
  template: `
  <app-snapshot-selector [projectId]="projectId" [snapshots]="snapshots" (handleCreateSnapshot)="testFunction()"
  (handleSnapshotSelected)="testFunctionTwo($event)"></app-snapshot-selector>
  `
})
class MockParentComponent {
  testFunction() {
      return "test";
  };
  testFunctionTwo(){
    return "test if chevron works";
  }

  projectId: string = mockProjectOne.id;
  snapshots: string[] = [];
}

describe("SnapshotSelectorComponent", () => {
    let testSnapshotSelector: IntegrationComponent<SnapshotSelectorComponent, MockParentComponent>;

  beforeEach(() => {
    testSnapshotSelector = new IntegrationComponent<SnapshotSelectorComponent, MockParentComponent>(SnapshotSelectorComponent, MockParentComponent);
    testSnapshotSelector.configure({
        imports: [FontAwesomeModule],
        declarations: [DropdownComponent]
    })
    testSnapshotSelector.initialise();
  });

  it("should create", () => {
    expect(testSnapshotSelector).toBeTruthy();
  });

  it("should inform user that there are no snapshots on the page", () => {
    const searchTerm: string = "No snapshots yet";
    expect(testSnapshotSelector.parentElement.textContent).toContain(searchTerm);
    testSnapshotSelector.setParentProps({
      snapshots: mockSnapShotOne
    });
    expect(testSnapshotSelector.parentElement.textContent).not.toContain(searchTerm);
  });

  it("should inform user that they are on active version when there are snapshots on the page", () => {
    const searchTerm: string = "Active version";
    expect(testSnapshotSelector.parentElement.textContent).not.toContain(searchTerm);
    testSnapshotSelector.setParentProps({
      snapshots: mockSnapShotOne
    });
    expect(testSnapshotSelector.parentElement.textContent).toContain(searchTerm);
  });

  it("should trigger the function to create a snapshot when create snapshot button is clicked", () => {
    const spy = spyOn(testSnapshotSelector.parentInstance, "testFunction");
    expect(spy).not.toHaveBeenCalled();    
    testSnapshotSelector.triggerEvent("button", "click");
    expect(spy).toHaveBeenCalledTimes(1);

    testSnapshotSelector.triggerEvent("button", "click");
    expect(spy).toHaveBeenCalledTimes(2);
  });

});