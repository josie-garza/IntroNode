// This code is responsible for the execution of other code

const utils = require('./utils');  //bring in utils file
//const someThing = utils.someThing;

// const { someThing, x, y, findInitials } = utils;  //destructuring
const { findInitials } = utils;  //destructuring
// can also do this while requiring

const { readFile } = require('fs'); //gives access to readFile

readFile('./stuff.txt', 'utf8', (err, data) => {
  if(err) console.log('ERROR', err);
  else {
    const dataS = data.split(' ');
    console.log(Number(dataS[0]) + Number(dataS[1]) + Number(dataS[2]) + Number(dataS[3]));
    // data is of type string
  }
});

// Two Tasks
// 1. Figure out how to sum all the numbers in the txt file
// 2. Write a new utils file that has a function called findInitials.
  // Takes in a string of space separated words and returns initials
  // of those words 'Josie Garza' --> 'JG'. Create a txt file of
  // line separated words and get initials

//console.log(someThing);

readFile('./words.txt', 'utf8', (err, data) => {
  if(err) console.log('ERROR', err);
  else {
    console.log(data);
  }
});
