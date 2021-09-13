/* VARIABLES AND FUNCTIONS */
// variable type declaration
// ---> ': TYPE' after variable name 
var test = "hello world";
console.log(test);
//function arg/return declaration
// ---> same convention as variables for args
// ---> return fro arrow func uses ': TYPE' after parenthasis and before arrow
var getFullName = function (firstname, lastname) {
    return firstname + ' ' + lastname;
};
console.log(getFullName('George', 'Smith'));
/* OBJECTS */
var user = {
    name: 'Joan',
    age: 40
};
var customer = {
    name: 'Doug',
    age: 3
};
var mac2015 = {
    brand: 'Apple',
    seller_comments: "Great condition"
};
var pc2020 = {
    brand: 'HP'
};
var student_1 = {
    firstname: 'John',
    lastname: 'Smith',
    gpa: 3.7,
    getFullName: function () {
        return this.firstname + ' ' + this.lastname;
    }
};
console.log(student_1.getFullName());
/* Unions */
var username = 'alex';
//if you want multiple types
var pageName = '1';
//using null
var errorMessage = null;
