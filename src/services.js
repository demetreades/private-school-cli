const getAll = (connection, table) => {
  connection.query(`SELECT * FROM \`${table}\`;`, function (err, result) {
    if (err) throw err;
    console.log(result);
    console.log(
      '\nStudents ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
    );
    for (const row of result) {
      console.log(
        `ID: ${row.id}, ${row.first_name} ${row.last_name}, tuition fees: ${row.tuition_fees}, date of birth: ${row.date_of_birth}, course: ${row.description}`
      );
    }
  });
};

// ------------

function getAllStudents(connection) {
  connection.query('SELECT * FROM `all_students`;', function (err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(
      '\nStudents ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
    );
    for (const row of result) {
      console.log(
        `ID: ${row.id}, ${row.first_name} ${row.last_name}, tuition fees: ${row.tuition_fees}, date of birth: ${row.date_of_birth}, course: ${row.description}`
      );
    }
  });
}

function getAllCourses(connection) {
  connection.query('SELECT * FROM `all_courses`;', function (err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(
      '\nCourses ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
    );
    for (const row of result) {
      console.log(
        `ID: ${row.id}, Courses details: ${row.title} ${row.stream} ${row.type}, start: ${row.start_date} // end: ${row.end_date}`
      );
    }
  });
}

function getAllAssignments(connection) {
  connection.query('SELECT * FROM `all_assignments`;', function (err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(
      '\nAssignments ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
    );
    for (const row of result) {
      console.log(
        `ID: ${row.id}, Assignments details: ${row.title}, ${row.description} ::: type: ${row.type}`
      );
    }
  });
}

function getAllTrainers(connection) {
  connection.query('SELECT * FROM `all_trainers`;', function (err, result) {
    if (err) throw err;
    // console.log(result);
    console.log(
      '\nTrainers ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n'
    );
    for (const row of result) {
      console.log(
        `ID: ${row.id},  ${row.first_name} ${row.last_name}, subject: ${row.title}, course: ${row.description}`
      );
    }
  });
}

// ----------------------

function createTrainer(connection, trainer) {
  connection.query(
    "INSERT INTO `university`.`trainers` (`first_name`, `last_name`, `subjects_id`) VALUES ('" +
      trainer.firstName +
      "','" +
      trainer.lastName +
      "','" +
      trainer.subjectId +
      "');",
    function (err, result) {
      if (err) throw err;
      // console.log(result);
      console.log(
        `\n~~~~~~~~~~~~  Trainer: ${trainer.fullName()}, inserted successfully   ~~~~~~~~~~~~\n`
      );
    }
  );
}

function createStudent(connection, student) {
  connection.query(
    "INSERT INTO `university`.`students` (`first_name`, `last_name`, `tuition_fees`, date_of_birth) VALUES ('" +
      student.firstName +
      "','" +
      student.lastName +
      "','" +
      student.tuitionFees +
      "','" +
      student.dateOfBirth +
      "');",
    function (err, result) {
      if (err) throw err;
      // console.log(result);
      console.log(
        `\n~~~~~~~~~~~~  Student: ${student.fullName()}, inserted successfully  ~~~~~~~~~~~~~\n\n`
      );
    }
  );
}

module.exports = {
  getAll,
  viewTrainers: getAllTrainers,
  viewStudents: getAllStudents,
  viewCourses: getAllCourses,
  viewAssignments: getAllAssignments,
  insertTrainers: createTrainer,
  insertStudents: createStudent,
};
