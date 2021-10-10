const _title = new WeakMap();
const _description = new WeakMap();
const _subDateTime = new WeakMap();
const _oralMark = new WeakMap();
const _assignmentMark = new WeakMap();
const _totalMarks = new WeakMap();

class Assignment {
  constructor(title, description, subDateTime, oralMark, assignmentMark) {
    this.title = title;
    this.description = description;
    this.subDateTime = subDateTime;
    this.oralMark = oralMark;
    this.assignmentMark = assignmentMark;
    this.totalMarks =
      (this.oralMark * 40 + this.assignmentMark * 80) / (40 + 60);
  }

  get title() {
    return _title.get(this);
  }
  set title(value) {
    if (value.length < 2 || value.length > 50) {
      throw new Error('Invalid title');
    }
    _title.set(this, value);
  }

  get description() {
    return _description.get(this);
  }
  set description(value) {
    if (value.length < 2 || value.length > 100) {
      throw new Error('Invalid description');
    }
    _description.set(this, value);
  }

  get subDateTime() {
    return _subDateTime.get(this);
  }
  set subDateTime(value) {
    if (!(value instanceof Date)) {
      throw new Error('Invalid submittion date');
    }
    _subDateTime.set(this, value);
  }

  get oralMark() {
    return _oralMark.get(this);
  }
  set oralMark(value) {
    if (isNaN(value) || value < 0 || value > 100) {
      throw new Error('Invalid marks');
    }
    _oralMark.set(this, value);
  }

  get assignmentMark() {
    return _assignmentMark.get(this);
  }
  set assignmentMark(value) {
    if (isNaN(value) || value < 0 || value > 100) {
      throw new Error('Invalid marks');
    }
    _assignmentMark.set(this, value);
  }

  get totaMarks() {
    return _totalMarks.get(this);
  }

  toString = () => {
    return `Assignment's details:
      ----------------------
      Title:            ${this.title}
      Description:      ${this.description} 
      Submittion date:  ${this.subDateTime}
      
      Marks ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
      
      Oral mark            ${this.oralMark} 
      Assignment's mark    ${this.assignmentMark}
      ------------------------
      Total marks          ${this.totalMarks}`;
  };
}

module.exports = Assignment;
