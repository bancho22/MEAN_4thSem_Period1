/**
 * Created by Bancho on 11-Feb-16.
 */

var person = {
    name: "Bancho",
    age: 20,
    hobby: "swimming",
    email: "banchopetrov@gmail.com"
};

Object.keys(person).forEach(function(key, index){
    console.log(key);
});

for(var key in person){
    console.log(key);
}

console.log(person.hasOwnProperty("hobby"));

delete person.hobby;

console.log(person.hasOwnProperty("hobby"));

function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

var person2 = new Person("Bancho", "Petrov", 20);

console.log(person);
console.log(person2);
