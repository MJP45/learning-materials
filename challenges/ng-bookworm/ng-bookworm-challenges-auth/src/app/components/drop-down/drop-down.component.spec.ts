import { DropdownComponent } from "./drop-down.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import {
  TestComponent,
  IntegrationComponent
} from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";

@Component({
  template: `
    <app-dropdown [label]="label"></app-dropdown>
  `
})
class ParentComponent {
  label: string;
}

describe("DropdownComponent", () => {
  let testDropdown: TestComponent<DropdownComponent>;

  beforeEach(() => {
    testDropdown = new TestComponent<DropdownComponent>(DropdownComponent);
    testDropdown.configure({ imports: [FontAwesomeModule] });
    testDropdown.initialise();
  });

  it("should create", () => {
    expect(testDropdown).toBeTruthy();
  });

  it("should render the faSortDown property as the FontAwesome icon attribute", () => {
    testDropdown.setProps({
      faSortDown
    });
    const iconElem = testDropdown.query("fa-icon .fa-sort-down");
    expect(iconElem).toBeTruthy();
  });
});

describe("Dropdown component integration tests", () => {
  let testDropdown: IntegrationComponent<DropdownComponent, ParentComponent>;

  beforeEach(() => {
    testDropdown = new IntegrationComponent<DropdownComponent, ParentComponent>(
      DropdownComponent,
      ParentComponent
    );
    testDropdown.configure({ imports: [FontAwesomeModule] });
    testDropdown.initialise();
  });

  it("should take a label string as input from it's parent component", () => {
    testDropdown.setParentProps({
      label: "Test string"
    });
    expect(testDropdown.instance.label).toBe("Test string");

    testDropdown.setParentProps({
      label: "Alternative test string"
    });
    expect(testDropdown.instance.label).toBe("Alternative test string");
  });
});
