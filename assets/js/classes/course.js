const _title = new WeakMap();
const _stream = new WeakMap();
const _type = new WeakMap();
const _startDate = new WeakMap();
const _endDate = new WeakMap();

class Course {
  constructor(title, stream, type, startDate, endDate) {
    this.title = title;
    this.stream = stream;
    this.type = type;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  get title() {
    return _title.get(this);
  }
  set title(value) {
    if(value.length < 2) {
      throw new Error('Title too short');
    }
    _title.set(this,value.toUpperCase());
  }

  get stream() {
    return _stream.get(this);
  }
  set stream(value) {
    if(value.length < 2) {
      throw new Error('Stream too short');
    }
    _stream.set(this,value);
  }

  get type() {
    return _type.get(this);
  }
  set type(value) {
    if(value.length < 2) {
      throw new Error('Type name too short');
    }
    _type.set(this,value);
  }

  get startDate() {
    return _startDate.get(this);
  }
  set startDate(value) {
    if(!(value instanceof Date)) {
      throw new Error('Invalid submittion date');
    }
    _startDate.set(this,value);
  }

  get endDate() {
    return _endDate.get(this);
  }
  set endDate(value) {
    if(!(value instanceof Date)) {
      throw new Error('Invalid submittion date');
    }
    _endDate.set(this,value);
  }

  toString = () => {
    return ( 
    `Course detail's:
    -----------------------
    Title:   ${this.title}
    Stream:  ${this.stream}
    Type:    ${this.type}
    -----------------------
    Start date:  ${this.startDate}
    End date:    ${this.endDate}`
    )
  }
  
};

module.exports = Course;
