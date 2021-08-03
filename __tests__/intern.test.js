const Intern = require("../lib/intern");

describe("Intern class", () => {
  it("tests to check if an object is returned that has an employee name, id, an email, and a school name", () => {
    const testObject = new Intern(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "University of Washington"
    );
    expect("employeeName" in testObject).toEqual(true);
    expect("employeeId" in testObject).toEqual(true);
    expect("employeeEmail" in testObject).toEqual(true);
    expect("school" in testObject).toEqual(true);
  });

  it("tests to make sure the employee has the role of Intern", () => {
    const testRole = "Intern";
    const expectedOutcome = new Intern().getRole();
    expect(expectedOutcome).toEqual(testRole);
  });

  it("tests to get the employee name", () => {
    const testName = "Lexi";
    const expectedOutcome = new Intern(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "University of Washington"
    ).getName();
    expect(expectedOutcome).toEqual(testName);
  });

  it("tests to get the employee ID", () => {
    const testId = 30;
    const expectedOutcome = new Intern(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "University of Washington"
    ).getId();
    expect(expectedOutcome).toEqual(testId);
  });

  it("tests to get the employee email", () => {
    const testEmail = "ahutch09@gmail.com";
    const expectedOutcome = new Intern(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "University of Washington"
    ).getEmail();
    expect(expectedOutcome).toEqual(testEmail);
  });

  it("tests to get the Intern School name", () => {
    const testSchoolName = "University of Washington";
    const expectedOutcome = new Intern(
      "Lexi",
      30,
      "ahutch09@gmail.com",
      "University of Washington"
    ).getSchool();
    expect(expectedOutcome).toEqual(testSchoolName);
  });
});