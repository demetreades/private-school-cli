const Person = require('./person.js');

const _subjectId = new WeakMap();

class Trainer extends Person {
  constructor(firstName, lastName, subjectId) {
    super(firstName, lastName); 
    this.subjectId = subjectId;
  }

  get subjectId() {
    return _subjectId.get(this);
  }
  set subjectId(value) {
    if(isNaN(value)) {
      throw new Error('Invalid subject')
    }
    _subjectId.set(this,value);
  }

  toString = () => {
    return (
    `Trainer's details:
    -----------------------
    Firstname:  ${this.firstName} 
    Lastname:   ${this.lastName}
    Subject:    ${this.subjectId}`
    )
  }
  
};

module.exports = Trainer;

