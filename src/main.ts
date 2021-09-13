// variable type declaration
// ---> ': TYPE' after variable name 
let test: string = "hello world"
console.log(test);

//function arg/return declaration
// ---> same convention as variables for args
// ---> return fro arrow func uses ': TYPE' after parenthasis and before arrow
const getFullName = (firstname: string, lastname: string): string => {
    return firstname + ' ' + lastname;
}

console.log(getFullName('George', 'Smith'))