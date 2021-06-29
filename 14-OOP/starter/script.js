'use strict';

function Person(name, dob) {
  this.name = name;
  this.dob = dob;
}

Person.prototype.getAge = function () {
  return new Date().getFullYear() - this.dob;
};

const p1 = new Person('sonu', 1998);
const p2 = new Person('prakash', 1997);
const p3 = new Person('aman', 1999);

// console.log(p1.getAge(), p2.getAge(), p3.getAge());
console.log(Person.prototype === p1.__proto__);
