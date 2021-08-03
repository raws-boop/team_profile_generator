const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
  it("tests to check if an object is returned that has an employee name, id, an email, and a github username", () => {
    const testObject = new Engineer(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "ahutch09"
    );
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
    expect("github" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of engineer", () => {
    const testRole = "Engineer";
    const expectedOutcome = new Engineer().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Lexi";
    const expectedOutcome = new Engineer(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "ahutch09"
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 30;
    const expectedOutcome = new Engineer(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "ahutch09"
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "ahutch09@gmail.com";
    const expectedOutcome = new Engineer(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "ahutch09"
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });

  it("tests to get the employee github", () => {
    const testGithub = "ahutch09";
    const expectedOutcome = new Engineer(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "ahutch09"
    ).getGithub();
    expect(expectedOutcome).toEqual(testGithub);
  });
});