import {  IntegrationComponent } from "@nology/angular-test-simplifier";
import { FormsModule, ReactiveFormsModule, FormBuilder, NgFormSelectorWarning } from '@angular/forms';
import { AppRegistrationPageComponent } from './app-registration-page.component';
import { Component, DebugElement } from '@angular/core';
import { IUser } from 'src/app/services/project.service';

@Component({
  template: '<app-registration-page></app-registration-page>'
})
class MockParentComponent {
  user: IUser;
}

describe('App registration component tests', () => {
  let testAppRegistration: IntegrationComponent<AppRegistrationPageComponent, MockParentComponent>;

  beforeEach(async () => {
    testAppRegistration = new IntegrationComponent<AppRegistrationPageComponent, MockParentComponent>(AppRegistrationPageComponent, MockParentComponent);
    testAppRegistration.configure({
      imports: [FormsModule]
    });
    testAppRegistration.initialise();
    await testAppRegistration.fixture.whenStable();
  });
  it("should create", () => {
    expect(testAppRegistration).toBeTruthy();
  });

  it("Should return false as an existing project name is being used", () => {
    testAppRegistration.instance.checkUniqueProjectName("Allotment Build")
    expect(testAppRegistration.instance.isUniqueName).toBeFalsy();
    testAppRegistration.instance.checkUniqueProjectName("aLLoTment build")
    expect(testAppRegistration.instance.isUniqueName).toBeFalsy();
  });
  it("Should return true as the project name is unique", () => {
    testAppRegistration.instance.checkUniqueProjectName("Allotment")
    expect(testAppRegistration.instance.isUniqueName).toBeTruthy();
  });
  it("Should return false as an bitBucket name is being used", () => {
    testAppRegistration.instance.checkUniqueBitBucketName("Allotment Build")
    expect(testAppRegistration.instance.isUniqueBitBucketName).toBeFalsy();
    testAppRegistration.instance.checkUniqueBitBucketName("aLLoTment build")
    expect(testAppRegistration.instance.isUniqueBitBucketName).toBeFalsy();
  });
  it("Should return true as the bitBucket name is unique", () => {
    testAppRegistration.instance.checkUniqueBitBucketName("Bit project")
    expect(testAppRegistration.instance.isUniqueBitBucketName).toBeTruthy();
  });
  it("should render error message if Project Name is not unique", () => {
    testAppRegistration.instance.checkUniqueProjectName("Allotment Build")
    testAppRegistration.updateFixture();
    expect(testAppRegistration.parentElement.textContent).toContain("Project name is taken,");
  });
  it("should render error message if Bit Bucket Name is not unique", () => {
    testAppRegistration.instance.checkUniqueBitBucketName("Allotment Build")
    testAppRegistration.updateFixture();
    expect(testAppRegistration.parentElement.textContent).toContain("Bit Bucket name is already in use");
  });
}); 
