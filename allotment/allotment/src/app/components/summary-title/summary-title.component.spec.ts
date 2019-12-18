import { SummaryTitleComponent } from './summary-title.component';
import { IntegrationComponent } from "@nology/angular-test-simplifier";
import { Component } from "@angular/core";

@Component({
    template: `<app-summary-title [primaryTitle]="primaryTitle" [title]="title"></app-summary-title>`
})
class MockParentComponent {
    primaryTitle: string = "";
    title: string = "";
}

describe('SummaryTitleComponent', () => {
    let testSummaryTitle: IntegrationComponent<SummaryTitleComponent, MockParentComponent>;

    beforeEach(() => {
        testSummaryTitle = new IntegrationComponent<SummaryTitleComponent, MockParentComponent>(
            SummaryTitleComponent,
            MockParentComponent
        );
        testSummaryTitle.initialise();
    });

    it('should create', () => {
        expect(testSummaryTitle).toBeTruthy();
    });

    it("should receive a title as data input", () => {
        testSummaryTitle.setParentProps({
            title: "Hello World"
        });
        expect(testSummaryTitle.instance.title).toEqual("Hello World");

        testSummaryTitle.setParentProps({
            title: "A different title"
        });
        expect(testSummaryTitle.instance.title).toEqual("A different title");
    });

    it('should render the title if a project', () => {
        testSummaryTitle.setParentProps({
            title: "Hello World"
        });
        expect(testSummaryTitle.parentElement.textContent).toContain("Hello World");
    });

    it("should receive a primary title as data input", () => {
        testSummaryTitle.instance.isProject = true;
        testSummaryTitle.setParentProps({
            primaryTitle: "Hello World"
        });
        expect(testSummaryTitle.instance.primaryTitle).toEqual("Hello World");

        testSummaryTitle.setParentProps({
            primaryTitle: "A different primary title"
        });
        expect(testSummaryTitle.instance.primaryTitle).toEqual("A different primary title");
    });

    it('should render the primary title if not a project', () => {
        testSummaryTitle.instance.isProject = false;
        testSummaryTitle.setParentProps({
            primaryTitle: "Hello World"
        });
        expect(testSummaryTitle.parentElement.textContent).toContain("Hello World");
    });
});
