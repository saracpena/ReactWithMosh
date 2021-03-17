//! Example 1
const person = {
    name: '',
    walk() {
        console.log(this);
    },
    talk() {}
};

person.walk();

const walk = person.walk.bind(person);
walk();

//! Example 2
// ES5
const square = function(number) {
    return number * number
}
// ES6
const square1 = number => {
    return number * number
}
// Shorter ES6 ONE PARAM
           //!number goes to number * number
const square2 = number => number * number;
console.log(square2(5));

//! Example 3
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false},
];

const activeJobs = jobs.filter(function(job) {return job.isActive;});

const activeJobs1 = jobs.filter(job => job.isActive);

//! Example 4 Arrow function don't need 'bind' because it inherits it

const people = {
    talk() {
        var self = this;
        setTimeout(() => {
         console.log('this', this);
        }, 1000 );
        
    }
};

people.talk();

// ! ARRAYS : map renders lists of items

const colors = ['red','green','blue'];
//I want to render these using a list element i.e. <li>color</li>
// I need to pass a callback function, the job of this function is to
// transform each element in the array. This function is called by the
// map method for each item in the colors array 'iterating'
// it takes one item at a (time) and returns a new item {}
//!          colors.map(function(item) {})
        // colors.map(function(color) {
        //     return '<li>' + color + '</li>';
        // });
//! THE ABOVE MAP METHOD RETURNS A NEW ARRAY MEANING IT WILL NOT MODIFY THE ORIGINAL COLORS ARRAY
//! INSIDE A NEW ARRAY
        // const items = colors.map(function(color){
        //     return '<li>' + color + '</li>';
        // });
//!ES6 example 1
// const items = colors.map(color => '<li>' + color + '</li>');
//!ES6 example 2
const items = colors.map(color => `<li>'${color}'</li>`);
console.log(items);


