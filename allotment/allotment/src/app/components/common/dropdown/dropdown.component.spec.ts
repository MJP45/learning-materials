import { DropdownComponent } from "./dropdown.component";
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";

@Component({
  template: `
    <app-dropdown
      [list]="snapshots"
      [selectedItem]="selectedItem"
      (handleListItemClick)="testMethod($event)"
    ></app-dropdown>
  `
})
class MockParentComponent {
  selectedItem: string = "";
  snapshots: string[] = ["2019/11/12, 15:49:20", "2019/11/14, 15:49:20"];

  testMethod(search: string) {
    return search;
  }
}

describe("DropdownComponent", () => {
  let testDropDown: IntegrationComponent<DropdownComponent, MockParentComponent>;

  beforeEach(() => {
    testDropDown = new IntegrationComponent<DropdownComponent, MockParentComponent>(
      DropdownComponent,
      MockParentComponent
    );
    testDropDown.initialise();
  });

  it("should create", () => {
    expect(testDropDown).toBeTruthy();
  });

  it("should call a method in the parent when output event is emitted on dropdown selection", () => {
    const spy = spyOn(testDropDown.parentInstance, "testMethod");
    testDropDown.triggerEvent(".listitem", "click");
    expect(spy).toHaveBeenCalled();
  });

  it("should call a method in the parent with the input value from the listitem for the date selected", () => {
    const spy = spyOn(testDropDown.parentInstance, "testMethod");
    testDropDown.triggerEvent(".listitem:nth-child(1)", "click");
    expect(spy).toHaveBeenCalledWith("2019/11/12, 15:49:20");
    testDropDown.triggerEvent(".listitem:nth-child(2)", "click");
    expect(spy).toHaveBeenCalledWith("2019/11/14, 15:49:20");
  });

  it("should receive selectedItem as data input", () => {
    testDropDown.setParentProps({
      selectedItem: "2019/11/14, 15:49:20"
    });
    expect(testDropDown.instance.selectedItem).toEqual("2019/11/14, 15:49:20");

    testDropDown.setParentProps({
      selectedItem: "2019/11/12, 15:49:20"
    });
    expect(testDropDown.instance.selectedItem).toEqual("2019/11/12, 15:49:20");
  });

  it("should receive a value of selected item from the parent", () => {
    testDropDown.setParentProps({
      selectedItem: "2019/11/12, 15:49:20"
    });
    expect(testDropDown.instance.selectedItem).toEqual("2019/11/12, 15:49:20");

    testDropDown.setParentProps({
      selectedItem: "hello world"
    });
    expect(testDropDown.instance.selectedItem).toEqual("hello world");
  });

  // it("should receive a value of selected item from the parent and for that selected item to have property of Selected = true", () => {
  //   testDropDown.setParentProps({
  //     selectedItem: "2019/11/14, 15:49:20"
  //   });

    // testDropDown.fixture.whenStable().then(() => {
    // console.log("AFTER");
    // console.log(testDropDown.instance.listItems);
    // });

    // console.log(
    //   testDropDown.instance.listItems.find(item => {
    //     return item.item === "2019-11-14T15:49:20Z";
    //   })
    // );

    // let selectItem = testDropDown.query(".listitem:nth-child(1)");
    // console.log(selectItem.classList);
    // expect(testDropDown.query(".listitem:nth-child(1)")).toBeTruthy();

    // testDropDown.setParentProps({
    //   selectedItem: "hello world"
    // });
    // expect(testDropDown.instance.selectedItem).toEqual("hello world");

});
