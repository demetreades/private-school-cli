const _firstName = new WeakMap();
const _lastName = new WeakMap();

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return _firstName.get(this);
  }
  set firstName(value) {
    if (value.length < 2 || value.length > 25) {
      throw new Error('Invalid firstname');
    }
    _firstName.set(
      this,
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    );
  }

  get lastName() {
    return _lastName.get(this);
  }
  set lastName(value) {
    if (value.length < 2 || value.length > 25) {
      throw new Error('Invalid lastname');
    }
    _lastName.set(
      this,
      value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    );
  }

  fullName = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

module.exports = Person;
