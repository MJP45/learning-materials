import { ToggleSwitchComponent } from './toggle-switch.component';
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  template: `
  <app-toggle-switch (handleClick) = "testMethod()" > </app-toggle-switch>
  `
})
class MockParentComponent {

  testMethod() {
    return true;
  }
}

describe('ToggleSwitchComponent', () => {
  let testToggleSwitch: IntegrationComponent<ToggleSwitchComponent, MockParentComponent>;

  beforeEach(() => {
    testToggleSwitch = new IntegrationComponent<ToggleSwitchComponent, MockParentComponent>(
      ToggleSwitchComponent,
      MockParentComponent
    );
    testToggleSwitch.configure({
      imports: [FontAwesomeModule]
    });
    testToggleSwitch.initialise();
  });

  it('should create', () => {
    expect(testToggleSwitch).toBeTruthy();
  });

  it("should call a method in the parent when output event is emitted on button click", () => {
    const spy = spyOn(testToggleSwitch.parentInstance, "testMethod");

    testToggleSwitch.triggerEvent("input", "click");
    expect(spy).toHaveBeenCalled();
  });
});
