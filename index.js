
function Person(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  
  module.exports = Person;
  
 

  const person1 = new Person('Sid', 'Bat', 'sid@gmail.com');
  const person2 = new Person('Kai', 'Son', 'kaison@gmail.com');
  const person3 = new Person('Mat', 'Turner', 'turner@gmail.com');

  console.log('Person 1:', person1);
  console.log('Person 2:', person3);
  console.log('Person 3:', person2);