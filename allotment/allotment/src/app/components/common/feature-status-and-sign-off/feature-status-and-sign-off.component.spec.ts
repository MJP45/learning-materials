
import { FeatureStatusAndSignOffComponent } from './feature-status-and-sign-off.component';
import { IntegrationComponent } from '@nology/angular-test-simplifier/';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component } from '@angular/core';
import { IFeature } from 'src/app/services/project.service';
import { mockFeatureOne, mockFeatureTwo } from 'src/assets/data/project-data';

@Component({
  template:`<app-feature-status-and-sign-off [feature]="feature" (handleSignOffClick)="testFunc($event)" [featureTitleFontSize]="featureTitleFontSize" [isViewingSnapshot]="isViewingSnapshot"></app-feature-status-and-sign-off>`
})
class MockParentComponent {
  feature: IFeature = mockFeatureOne;
  featureTitleFontSize:number = 20;
  isViewingSnapshot: boolean = false;
  testFunc(input: any) {
    console.log("test func called")
    return input;
  }
}

describe('FeatureStatusAndSignOffComponent', () => {
  let testFeatureSignOff: IntegrationComponent<
  FeatureStatusAndSignOffComponent,
  MockParentComponent
>;
  
  beforeEach(() => {
    testFeatureSignOff = new IntegrationComponent<
    FeatureStatusAndSignOffComponent,
    MockParentComponent
    >(FeatureStatusAndSignOffComponent, MockParentComponent);

    testFeatureSignOff.configure({
      imports: [FontAwesomeModule]
    });
    testFeatureSignOff.initialise();
  });

  it('should create', () => {
    expect(testFeatureSignOff).toBeTruthy();
  });

  it("should receive feature as data input", () => {
    testFeatureSignOff.setParentProps({
      feature: mockFeatureTwo
    });
    expect(testFeatureSignOff.instance.feature).toEqual(mockFeatureTwo);
  });

  it("should receive isViewingSnapshot as input", () => {
    testFeatureSignOff.setParentProps({
      isViewingSnapshot: true
    });
    expect(testFeatureSignOff.instance.isViewingSnapshot).toEqual(true);

    testFeatureSignOff.setParentProps({
      isViewingSnapshot: false
    });
    expect(testFeatureSignOff.instance.isViewingSnapshot).toEqual(false);
  });

  it("should receive a font size from the parent as an input", () => {
    testFeatureSignOff.setParentProps({
      featureTitleFontSize: 15
    });
    expect(testFeatureSignOff.instance.featureTitleFontSize).toBe(15);
    
    testFeatureSignOff.setParentProps({
      featureTitleFontSize: 24
    });
    expect(testFeatureSignOff.instance.featureTitleFontSize).toBe(24);    
  });

  it("should call a method in the parent when signOff is Clicked", () => {
    const spy = spyOn(testFeatureSignOff.parentInstance, "testFunc");
    testFeatureSignOff.setProps({showSignOffPopUp:true});
    expect(spy).not.toHaveBeenCalled();    
    testFeatureSignOff.triggerEvent(".fortesting", "click");
    expect(spy).toHaveBeenCalledTimes(1);
    expect(testFeatureSignOff.instance.showSignOffPopUp).toBe(false);
  });

  it("should render correct feature status before sign off", () => {
    testFeatureSignOff.setParentProps({
      feature: mockFeatureOne
    });
    expect(testFeatureSignOff.parentElement.textContent).toContain(
      mockFeatureOne.status
    );
  });

  it("should render correct feature status after sign off", () => {
    testFeatureSignOff.setParentProps({
      feature: mockFeatureOne
    });
    testFeatureSignOff.setProps({showSignOffPopUp: true});
    testFeatureSignOff.triggerEvent('button', 'click');
    expect(testFeatureSignOff.parentElement.textContent.trim()).toContain(
      mockFeatureOne.status.trim()
    );
  });

  it("handleStatusClick function should change showSignOffPopup boolean", () => {
    testFeatureSignOff.setProps({
      showSignOffPopUp: false
    });
    const event = new Event('click');
    testFeatureSignOff.instance.handleStatusClick(event);
    expect(testFeatureSignOff.instance.showSignOffPopUp).toBe(true);
    testFeatureSignOff.instance.handleStatusClick(event);
    expect(testFeatureSignOff.instance.showSignOffPopUp).toBe(false);
  });  
});
