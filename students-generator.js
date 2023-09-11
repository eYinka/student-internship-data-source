const fs = require('fs');

function getRandomValue() {
  return Math.round(Math.random() * 3);
}

function generateStudent() {
  return {
    personal: {
      nickname: getRandomValue(),
      gender: getRandomValue(),
    },
    education: {
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
    industry_skills: {
      industry_experience: getRandomValue(),
      specialisation: getRandomValue(),
      job_placement_history: getRandomValue(),
    },
    tech_skills: {
      java: getRandomValue(),
      html: getRandomValue(),
      accounting: getRandomValue(),
      project_management: getRandomValue(),
    },
    general: {
      ready_to_move: getRandomValue(),
      remote_only: getRandomValue(),
      hybrid: getRandomValue(),
      in_office_preferred: getRandomValue(),
      preferred_location: getRandomValue(),
    },
  };
}

const students = [];

for (let i = 0; i < 500; i++) {
  students.push(generateStudent());
}

const jsonData = JSON.stringify({ students: students }, null, 2);

fs.writeFile('students.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.log(`Error writing file: ${err}`);
  } else {
    console.log('Successfully wrote students.json');
  }
});
