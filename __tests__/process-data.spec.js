const processTheData = require("../lib/process-data");
describe("Process Data", () => {
  let processedData;
  let mockData = [
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
      project3: "fail",
      project4: "pass"
    },
    {
      name: "Emmalee Daugherty",
      age: 25,
      yearsExperience: 2,
      satisfaction: 4,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    },
    {
      name: "test Person",
      age: 40,
      yearsExperience: 1,
      satisfaction: 5,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    },
    {
      name: "second test",
      age: 20,
      yearsExperience: 1,
      satisfaction: 1,
      project1: "fail",
      project2: "pass",
      project3: "pass",
      project4: "fail"
    }
  ];
  beforeEach(() => {
    processedData = processTheData(mockData);
  });
  describe("Shape of processed data", () => {
    it("should generate an object with 3 keys", () => {
      expect(Object.keys(processedData)).toEqual([
        "projects",
        "experience",
        "demographics"
      ]);
    });
    describe("Projects", () => {
      it("should create an object for each project", () => {
        expect(Object.keys(processedData.projects)).toEqual([
          "project1",
          "project2",
          "project3",
          "project4"
        ]);
      });
      it("should calculate average satisfaction for passing students", () => {
        expect(processedData.projects.project1.passed.satisfaction).toEqual(2);
        expect(processedData.projects.project1.passed.number).toEqual(1);
      });
      it("should calculate average satisfaction for failing students", () => {
        expect(processedData.projects.project1.failed.satisfaction).toEqual(3);
        expect(processedData.projects.project1.failed.number).toEqual(4);
      });
    });
    describe("Experience", () => {
      it("should return average satisfaction for all years of experience present in the data", () => {
        expect(processedData.experience["1"]).toEqual({
          satisfaction: 3
        });
        expect(processedData.experience["2"]).toEqual({
          satisfaction: 4
        });
        expect(processedData.experience["3"]).toEqual({
          satisfaction: 2
        });
      });
    });
    describe("Demographics", () => {
      it("should return average age (rounded up) and satisfaction (rounded down) for the cohort", () => {
        expect(processedData.demographics.averageAge).toEqual(32);
        expect(processedData.demographics.satisfaction).toEqual(2.8);
      });
    });
  });
});
