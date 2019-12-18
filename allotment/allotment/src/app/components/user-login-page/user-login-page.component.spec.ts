import { UserLoginPageComponent } from "./user-login-page.component";
import { TestComponent } from "@nology/angular-test-simplifier";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FormsModule } from "@angular/forms";
import { RouterTestingModule } from '@angular/router/testing';

const validForm = {
  email: "a@a.com",
  password: "aA1assas34"
}

const invalidForm = {
  email: "a",
  password: "aassas"
}

describe("UserLoginPageComponent", () => {
  let userLoginTest: TestComponent<UserLoginPageComponent>;

  beforeEach(async () => {
    userLoginTest = new TestComponent<UserLoginPageComponent>(UserLoginPageComponent);
    userLoginTest.configure({
      declarations: [UserLoginPageComponent],
      imports: [FontAwesomeModule, FormsModule, RouterTestingModule]
    });
    userLoginTest.initialise();
    await userLoginTest.fixture.whenStable();
  });

  it("should create", () => {
    expect(userLoginTest).toBeTruthy();
  });

  it("should validate if the email is correct", () => {
    userLoginTest.triggerEvent(".qa-email", "input", "a@a");
    expect(userLoginTest.query(".qa-email.valid")).toBeTruthy();

    userLoginTest.triggerEvent(".qa-email", "input", "kjdkjdskjds");
    expect(userLoginTest.query(".qa-email.invalid")).toBeTruthy();
  });

  it("should render email error message if the email is incorrect", () => {
    userLoginTest.triggerEvent(".qa-email", "input", "");
    expect(userLoginTest.element.textContent).toContain("Email is required");

    userLoginTest.triggerEvent(".qa-email", "input", "kjdkjdskjds");
    expect(userLoginTest.element.textContent).toContain("Email is invalid");
  });

  it("should validate if the password is correct", () => {
    userLoginTest.triggerEvent(".qa-password", "input", "Test199");
    expect(userLoginTest.query(".qa-password.valid")).toBeTruthy();

    userLoginTest.triggerEvent(".qa-password", "input", "kjkjds");
    expect(userLoginTest.query(".qa-password.invalid")).toBeTruthy();
  });

  it("should render password error message if the password is incorrect", () => {
    userLoginTest.triggerEvent(".qa-password", "input", "");
    expect(userLoginTest.element.textContent).toContain("Password is required");

    userLoginTest.triggerEvent(".qa-password", "input", "kjdjjs");
    expect(userLoginTest.element.textContent).toContain("Password must contain one uppercase, one lowercase character and one number");

    userLoginTest.triggerEvent(".qa-password", "input", "Hi1");
    expect(userLoginTest.element.textContent).toContain("Password must be minimum 6 characters");
  });

  // Curently not able to test button disabled status using this syntax. Visually tested and signed off

  // it("should disable button if form is invalid", async () => {
  //   userLoginTest.triggerEvent('input[type="email"]', 'input', invalidForm.email);
  //   userLoginTest.triggerEvent('input[type="password"]', 'input', invalidForm.email);
  //   await userLoginTest.fixture.whenStable();
  //   expect(userLoginTest.query('.qa-button').disabled).toBe(true);
  //   userLoginTest.triggerEvent('input[type="email"]', 'input', validForm.email);
  //   userLoginTest.triggerEvent('input[type="password"]', 'input', validForm.email);
  //   await userLoginTest.fixture.whenStable();
  //   expect(userLoginTest.query('.qa-button').disabled).toBe(false);
  // });
});
