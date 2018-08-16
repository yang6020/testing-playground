const StudentStats = require("../lib/students-stats");
describe("Student Stats", () => {
  let statsMachine, processedData;
  beforeEach(() => {
    statsMachine = new StudentStats("../lib/data.json");
    // you can also do stats.load("../lib/data.json"), we did it by maing a new class
    processedData = {
      projects: {
        project1: {
          passed: { number: 49, satisfaction: 10 },
          failed: { number: 51, satisfaction: 10 }
        }
      },
      experience: {
        1: { satisfaction: 10 },
        2: { satisfaction: 10 },
        4: { satisfaction: 10 }
      },
      demograpgics: {
        averageAge: 10,
        satisfaction: 10
      }
    };
  });
  it("Should load the JSON", () => {
    expect(statsMachine.data).toBeDefined();
    expect(statsMachine.data[0].name).toEqual("Miss Jermain Waters");
  });
  describe("Query project query by name", () => {
    describe("When project name does not exist ", () => {
      it("should return the correct stats", () => {
        expect(() => statsMachine.getProjectByName("aaa")).toThrow(
          "Invalid Project Provided"
        );
      });
    });
    describe("When project name exists", () => {
      it("should return the correct stats", () => {
        expect(statsMachine.getProjectByName("project1")).toEqual(
          processedData.projects["project1"]
        );
      });
    });
  });
});
