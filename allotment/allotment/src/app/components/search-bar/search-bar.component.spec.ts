import { SearchBarComponent } from "./search-bar.component";
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";

@Component({
  template: `
    <app-search-bar
      (handleSearch)="testMethod($event)"
      [placeholderText]="placeholderText"
    ></app-search-bar>
  `
})
class MockParentComponent {
  placeholderText: string = "";

  testMethod(search: string) {
    return search;
  }
}

describe("SearchBarComponent", () => {
  let testSearchBar: IntegrationComponent<SearchBarComponent, MockParentComponent>;

  beforeEach(() => {
    testSearchBar = new IntegrationComponent<SearchBarComponent, MockParentComponent>(
      SearchBarComponent,
      MockParentComponent
    );
    testSearchBar.initialise();
  });

  it("should create", () => {
    expect(testSearchBar).toBeTruthy();
  });

  it("should call a method in the parent when output event is emitted on button click", () => {
    const spy = spyOn(testSearchBar.parentInstance, "testMethod");

    testSearchBar.triggerEvent("button", "click");
    expect(spy).toHaveBeenCalled();
  });

  it("should call a method in the parent with the input value from searchbar on button click", () => {
    const spy = spyOn(testSearchBar.parentInstance, "testMethod");

    testSearchBar.query("input").value = "Hello World";
    testSearchBar.triggerEvent("button", "click");
    expect(spy).toHaveBeenCalledWith("Hello World");

    testSearchBar.query("input").value = "nology";
    testSearchBar.triggerEvent("button", "click");
    expect(spy).toHaveBeenCalledWith("nology");
  });

  it("should receive an placeholder as data input", () => {
    testSearchBar.setParentProps({
      placeholderText: "this is my placeholder"
    });
    expect(testSearchBar.instance.placeholderText).toEqual("this is my placeholder");

    testSearchBar.setParentProps({
      placeholderText: "this is a different placeholder"
    });
    expect(testSearchBar.instance.placeholderText).toEqual("this is a different placeholder");
  });

  it("should put placeHolderText into the placeholder of the input", () => {
    const inputBox = testSearchBar.query("input");

    testSearchBar.setParentProps({
      placeholderText: "this is my placeholder"
    });
    expect(inputBox.getAttribute("placeholder")).toEqual("this is my placeholder");

    testSearchBar.setParentProps({
      placeholderText: "this is a different placeholder"
    });
    expect(inputBox.getAttribute("placeholder")).toEqual("this is a different placeholder");
  });

  it("should call a method in the parent when output event is emitted on keydown enter", () => {
    const spy = spyOn(testSearchBar.parentInstance, "testMethod");
    testSearchBar.query("input").dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(spy).toHaveBeenCalled();
  });

  it("should call a method in the parent with the input value from searchbar on keydown", () => {
    const spy = spyOn(testSearchBar.parentInstance, "testMethod");

    testSearchBar.query("input").value = "Hello World";
    testSearchBar.query("input").dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(spy).toHaveBeenCalledWith("Hello World");

    testSearchBar.query("input").value = "nology";
    testSearchBar.query("input").dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
    expect(spy).toHaveBeenCalledWith("nology");
  });
});
