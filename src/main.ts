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

/* Functions inside interfaces */
interface Student {
    firstname: string,
    lastname: string,
    gpa: number,
    getFullName(): string;
}

const student_1: Student = {
    firstname: 'John',
    lastname: 'Smith',
    gpa: 3.7,
    getFullName() {
        return this.firstname + ' ' + this.lastname;
    }
}

console.log(student_1.getFullName())

/* Interfaces with Classes */

//Naming convention for interface to avoid same name as class
interface DogInterface {
    breed: string,
    age: number
}

/* Unions */

let username: string = 'alex';

//if you want multiple types
let pageName: string | number = '1';

//using null
let errorMessage: string | null = null;