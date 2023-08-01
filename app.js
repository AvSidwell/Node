const fs = require('fs');

const content1 = 'This is the first content.\n';
fs.writeFile('data.txt', content1, (err) => {
  if (err) throw err;
  console.log('Content 1 was written');
});

const content2 = 'This is the second content.\n';
fs.writeFile('data.txt', content2, { flag: 'a' }, (err) => {
  if (err) throw err;
  console.log('Content 2 was appended');
});

const content3 = 'This is the third content.\n';
fs.appendFile('data.txt', content3, (err) => {
  if (err) throw err;
  console.log('Content 3 was appended');
});

function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  
  module.exports = Person;

  
//   const person1 = new Person('Sid', 'Bat', 'sid@example.com');

//   console.log('Person 1:', person1);