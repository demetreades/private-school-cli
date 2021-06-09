const mysql = require('mysql2');
const prompt = require('prompt-sync')({siginit: true}); 
const services = require('./assets/js/services.js');

const Student = require('./assets/js/classes/student.js');
const Trainer = require('./assets/js/classes/trainer.js');
const Course = require('./assets/js/classes/course.js');
const Assignment = require('./assets/js/classes/assignment.js');

const saibaba = new Student('Sai', 'Baba', '2500', new Date(1987,1,5));
const giannis = new Trainer('Giannis', 'Mantoudis', 1);
const CB13 = new Course('CB13', 'JavaScripta' ,'Part Time', new Date(2021,1,1,09,00,00), new Date(2021,3,30,17,00,00));
const assign1 = new Assignment('Private school', 'Make an application emulating a private school', new Date(2021,1,5, 23,59,00), 20, 80)

// for testing
console.log('\n\n\n\n\n==========================================================================================');
console.log('\n------------------------------------------------------------------------------------------\n');
console.log(saibaba.toString());
console.log('\n------------------------------------------------------------------------------------------\n');
console.log(giannis.toString());
console.log('\n------------------------------------------------------------------------------------------\n');
console.log(CB13.toString());
console.log('\n------------------------------------------------------------------------------------------\n');
console.log(assign1.toString());
console.log('\n------------------------------------------------------------------------------------------\n');
console.log('==========================================================================================\n\n\n\n\n');

//

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1212",
  database: "university",
  connectTimeout: 60000
});

connection.connect(function(error){
  if(error) throw error;
});

// views
services.viewTrainers(connection);
services.viewStudents(connection);
services.viewCourses(connection);
services.viewAssignments(connection);

// prompt trainer
let promptFName = prompt(`Enter trainer\'s first name   :  `);
let promptLName = prompt(`Enter trainer\'s last name   :  `);
let promptSId = prompt(`Enter trainer\'s subject id (max 9)   :  `);
const promptTrainer = new Trainer(promptFName, promptLName, promptSId);
services.insertTrainers(connection, promptTrainer);

connection.end();

