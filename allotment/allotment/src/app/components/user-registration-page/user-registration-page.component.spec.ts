import { UserRegistrationPageComponent } from "./user-registration-page.component";
import { TestComponent } from "@nology/angular-test-simplifier";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';

describe("UserRegistrationPageComponent", () => {
  let userRegistrationTest: TestComponent<UserRegistrationPageComponent>;

  beforeEach(async () => {
    userRegistrationTest = new TestComponent<UserRegistrationPageComponent>(UserRegistrationPageComponent);
    userRegistrationTest.configure({
      imports: [FontAwesomeModule, FormsModule, RouterTestingModule]
    });
    userRegistrationTest.initialise();
    await userRegistrationTest.fixture.whenStable();
  });

  it("should create", () => {
    expect(userRegistrationTest).toBeTruthy();
  });


  it("should validate if the first name is input", () => {

    userRegistrationTest.triggerEvent(".qa-first-name", "input", "");
    expect(userRegistrationTest.query("input.qa-first-name.invalid")).toBeTruthy();

    userRegistrationTest.triggerEvent(".qa-first-name", "input", "bob");
    expect(userRegistrationTest.query(".qa-first-name.valid")).toBeTruthy();
  });
  
  it("should render first name error message if the first name is not entered", () => {
    userRegistrationTest.triggerEvent(".qa-first-name", "input", "");
    expect(userRegistrationTest.element.textContent).toContain("First name is a required field");
  });

  it("should validate if the last name is input", () => {

    userRegistrationTest.triggerEvent(".qa-last-name", "input", "");
    expect(userRegistrationTest.query("input.qa-last-name.invalid")).toBeTruthy();

    userRegistrationTest.triggerEvent(".qa-last-name", "input", "bob");
    expect(userRegistrationTest.query(".qa-last-name.valid")).toBeTruthy();
  });

  it("should render last name error message if the last name is not entered", () => {
    userRegistrationTest.triggerEvent(".qa-last-name", "input", "");
    expect(userRegistrationTest.element.textContent).toContain("Last name is a required field");
  });

  it("should validate if the email is correct", () => {
    userRegistrationTest.triggerEvent(".qa-email", "input", "a@a");
    expect(userRegistrationTest.query(".qa-email.valid")).toBeTruthy();

    userRegistrationTest.triggerEvent(".qa-email", "input", "kjdkjdskjds");
    expect(userRegistrationTest.query(".qa-email.invalid")).toBeTruthy();
  });

  it("should render email error message if the email is incorrect", () => {
    userRegistrationTest.triggerEvent(".qa-email", "input", "");
    expect(userRegistrationTest.element.textContent).toContain("Email is required");

    userRegistrationTest.triggerEvent(".qa-email", "input", "kjdkjdskjds");
    expect(userRegistrationTest.element.textContent).toContain("Email is invalid");
  });

  it("should validate if the password is correct", () => {
    userRegistrationTest.triggerEvent(".qa-password", "input", "Test199");
    expect(userRegistrationTest.query(".qa-password.valid")).toBeTruthy();

    userRegistrationTest.triggerEvent(".qa-password", "input", "kjkjds");
    expect(userRegistrationTest.query(".qa-password.invalid")).toBeTruthy();
  });

  it("should render password error message if the password is incorrect", () => {
    userRegistrationTest.triggerEvent(".qa-password", "input", "");
    expect(userRegistrationTest.element.textContent).toContain("Password is required");

    userRegistrationTest.triggerEvent(".qa-password", "input", "kjdjjs");
    expect(userRegistrationTest.element.textContent).toContain("Password must contain one uppercase, one lowercase character and one number");

    userRegistrationTest.triggerEvent(".qa-password", "input", "Hi1");
    expect(userRegistrationTest.element.textContent).toContain("Password must be minimum 6 characters");
  });


  it("should validate if the confirm password matches the initial password", () => {
    userRegistrationTest.triggerEvent(".qa-password", "input", "Test199");
    userRegistrationTest.triggerEvent(".qa-confirm-password", "input", "Test199");
    expect(userRegistrationTest.query(".qa-confirm-password.valid")).toBeTruthy();

    userRegistrationTest.triggerEvent(".qa-password", "input", "kJ1jds");
    userRegistrationTest.triggerEvent(".qa-confirm-password", "input", "Test199");
    expect(userRegistrationTest.query(".qa-confirm-password.invalid")).toBeTruthy();
  });

  it("should render confirm password error message if the passwords do not match or is empty", () => {
    userRegistrationTest.triggerEvent(".qa-confirm-password", "input", "");
    expect(userRegistrationTest.element.textContent).toContain("Password is required");

    userRegistrationTest.triggerEvent(".qa-password", "input", "kJ1jds");
    userRegistrationTest.triggerEvent(".qa-confirm-password", "input", "Test199");
    expect(userRegistrationTest.element.textContent).toContain("Passwords must match");
  });

  // Curently not able to test button disabled status using this syntax. Visually tested and signed off
  
  // it("should disable button if form is invalid", () => {

    // userRegistrationTest.query("form").value = validForm;
    // userRegistrationTest.updateFixture();
    // expect(userRegistrationTest.query(".qa-button").disabled).toBe(false);
  // });
});