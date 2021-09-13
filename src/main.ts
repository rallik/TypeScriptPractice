/* VARIABLES AND FUNCTIONS */

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


/* OBJECTS */
const user: {name: string, age: number} = {
    name: 'Joan',
    age: 40
}


/* Interfaces */
interface Customer {
    name: string;
    age: number;
}

const customer: Customer = {
    name: 'Doug',
    age: 3
}

/* Object non-mandatory properties */
interface Computer {
    brand: string,
    seller_comments?: string
}

const mac2015: Computer = {
    brand: 'Apple',
    seller_comments: "Great condition"
}

const pc2020: Computer = {
    brand: 'HP'
}