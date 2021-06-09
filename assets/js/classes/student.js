const Person = require('./person.js');

const _tuitionFees = new WeakMap();
const _dateOfBirth = new WeakMap();

class Student extends Person {
  constructor(firstName, lastName, tuitionFees, dateOfBirth) {
    super(firstName, lastName); 
    this.tuitionFees = tuitionFees;
    this.dateOfBirth = dateOfBirth;
  }

  get tuitionFees() {
    return _tuitionFees.get(this);
  }
  set tuitionFees(value) {
    if(isNaN(value) || value.length < 0 || value.length > 4) {
      throw new Error('Invalid tuition fees');
    }
    _tuitionFees.set(this,value);
  }

  get dateOfBirth() {
    return _dateOfBirth.get(this);
  }
  set dateOfBirth(value) {
    _dateOfBirth.set(this,value);
  }

  toString = () => {
    return (
      `Student's details:
      ---------------------
      Firstname:      ${this.firstName}
      Lastname:       ${this.lastName}
      Tuition fees:   ${this.tuitionFees}€
      Date of birth:  ${this.dateOfBirth}`
    )
  }

};

module.exports = Student;
