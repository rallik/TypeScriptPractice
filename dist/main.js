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
