const Manager = require("../lib/manager");

describe("Manager class", () => {
  it("tests to check if an object is returned that has an employee name, id, an email, and an office number", () => {
    const testObject = new Manager(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      1
    );
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
    expect("officeNumber" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of Manager", () => {
    const testRole = "Manager";
    const expectedOutcome = new Manager().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Lexi";
    const expectedOutcome = new Manager(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      1
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 30;
    const expectedOutcome = new Manager(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      1
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "ahutch09@gmail.com";
    const expectedOutcome = new Manager(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      1
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });

  it("tests to get the Manager office number", () => {
    const testOfficeNum = 1;
    const expectedOutcome = new Manager(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      1
    ).officeNumber();
    expect(expectedOutcome).toEqual(testOfficeNum);
  });
});