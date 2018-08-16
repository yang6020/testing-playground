module.exports = processTheData = arrayObj => {
  let result = {
    projects: {
      project1: {
        passed: { number: 0, satisfaction: 0 },
        failed: { number: 0, satisfaction: 0 }
      },
      project2: {
        passed: { number: 0, satisfaction: 0 },
        failed: { number: 0, satisfaction: 0 }
      },
      project3: {
        passed: { number: 0, satisfaction: 0 },
        failed: { number: 0, satisfaction: 0 }
      },
      project4: {
        passed: { number: 0, satisfaction: 0 },
        failed: { number: 0, satisfaction: 0 }
      }
    },
    experience: {},
    demographics: { averageAge: 0, satisfaction: 0 }
  };
  let sumPass = 0;
  let sumFail = 0;
  let sumAge = 0;
  let sumSat = 0;
  let experienceSet = new Set();

  const projectValues = (arrayObj, projectNum) => {
    for (let i = 0; i < arrayObj.length; i++) {
      if (arrayObj[i][projectNum] === "pass") {
        result.projects[projectNum].passed.number++;
        sumPass += arrayObj[i].satisfaction;
      } else {
        result.projects[projectNum].failed.number++;
        sumFail += arrayObj[i].satisfaction;
      }
      if (i == arrayObj.length - 1 && sumPass != 0) {
        result.projects[projectNum].passed.satisfaction =
          sumPass / result.projects[projectNum].passed.number;
      }
      if (i == arrayObj.length - 1 && sumFail != 0) {
        result.projects[projectNum].failed.satisfaction =
          sumFail / result.projects[projectNum].failed.number;
      }
    }
    sumPass = 0;
    sumFail = 0;
  };
  const experienceValues = (arrayObj, yearsExperience) => {
    for (let i = 0; i < arrayObj.length; i++) {
      if (result.experience[yearsExperience]) {
        let origTotalSat =
          result.experience[yearsExperience].satisfaction *
          result.experience[yearsExperience].count;
        origTotalSat += arrayObj[i].satisfaction;
        result.experience[yearsExperience].count += 1;
        result.experience[yearsExperience].satisfaction =
          origTotalSat / result.experience[yearsExperience].count;
      } else if (!result.experience[yearsExperience]) {
        result.experience[arrayObj[i].yearsExperience] = {
          satisfaction: arrayObj[i].satisfaction,
          count: 1
        };
      }
    }
  };
  for (let j = 0; j < arrayObj.length; j++) {
    sumAge += arrayObj[j].age;
    sumSat += arrayObj[j].satisfaction;
    if (j == arrayObj.length - 1) {
      result.demographics.averageAge = Math.ceil(sumAge / arrayObj.length);
      result.demographics.satisfaction = sumSat / arrayObj.length;
    }
  }
  for (let z = 0; z < arrayObj.length; z++) {
    experienceSet.add(arrayObj[z].yearsExperience);
  }
  let experienceArray = Array.from(experienceSet);
  for (let a = 0; a < experienceArray.length; a++) {
    experienceValues(arrayObj, experienceArray[a]);
  }
  projectValues(arrayObj, "project1");
  projectValues(arrayObj, "project2");
  projectValues(arrayObj, "project3");
  projectValues(arrayObj, "project4");
  for (let prop in result.experience) {
    delete result.experience[prop]["count"];
  }

  for (let b = 0; b < Object.keys(result.experience).length; b++) {
    delete result.experience.count;
  }

  return result;
};
