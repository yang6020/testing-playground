const studentData = require("../../lib/myOwnStuff/studentData");

describe("studenData", () => {
  describe("student data", () => {
    const result = studentData([
      {
        name: "Miss Jermain Waters",
        age: 31,
        yearsExperience: 3,
        satisfaction: 2,
        project1: "pass",
        project2: "fail",
        project3: "fail",
        project4: "pass"
      },
      {
        name: "Juliana Runte",
        age: 42,
        yearsExperience: 3,
        satisfaction: 2,
        project1: "fail",
        project2: "fail",
        project3: "pass",
        project4: "pass"
      }
    ]);
    expect(result).toEqual([
      { age: "30-39", count: 1 },
      { age: "40-49", count: 1 }
    ]);
  });
});
