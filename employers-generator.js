const fs = require('fs');

function getRandomValue() {
  return Math.random().toFixed(1);
}

function generateEmployer() {
  return {
    personal: {
      score: getRandomValue(),
      attributes: {
        nickname: getRandomValue(),
        gender: getRandomValue(),
      },
    },
    education: {
      score: getRandomValue(),
      attributes: {
        ssc_percentage: getRandomValue(),
        ssc_board: getRandomValue(),
        hsc_percentage: getRandomValue(),
        hsc_board: getRandomValue(),
        hsc_subject: getRandomValue(),
        degree_percentage: getRandomValue(),
        undergrad_degree: getRandomValue(),
        work_experience: getRandomValue(),
        emp_test_percentage: getRandomValue(),
        mba_percent: getRandomValue(),
      },
    },
    industry_skills: {
      score: getRandomValue(),
      attributes: {
        industry_experience: getRandomValue(),
        specialisation: getRandomValue(),
        job_placement_history: getRandomValue(),
      },
    },
    tech_skills: {
      score: getRandomValue(),
      attributes: {
        java: getRandomValue(),
        html: getRandomValue(),
        accounting: getRandomValue(),
        project_management: getRandomValue(),
      },
    },
    general: {
      score: getRandomValue(),
      attributes: {
        ready_to_move: getRandomValue(),
        remote_only: getRandomValue(),
        hybrid: getRandomValue(),
        in_office_preferred: getRandomValue(),
        preferred_location: {
          London: getRandomValue(),
          Liverpool: getRandomValue(),
          Essex: getRandomValue(),
        },
      },
    },
  };
}

const employers = [];

for (let i = 0; i < 100; i++) {
  employers.push(generateEmployer());
}

const jsonData = JSON.stringify({ employers }, null, 2);

fs.writeFile('employers.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.log(`Error writing file: ${err}`);
  } else {
    console.log('Successfully wrote employers.json');
  }
});
