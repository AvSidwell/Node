
function Person(firstName, lastName, emailAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailAddress = emailAddress;
  }
  
  module.exports = Person;
  
  // index.js

  const person1 = new Person('Sid', 'Bat', 'sid@gmail.com');

  console.log('Person 1:', person1);