// let someThing = 'SOMETHING';
// let x = 5;
// let y = 10;
//
// module.exports = {
//   someThing: someThing, // can also just say someThing, x, y bc key = value
//   x: x,
//   y: y
// };

const findInitials = (words) => {
  const arr = words.split(' ');
  const firstLetters = arr.map(word =>  word[0]);
  const initials = firstLetters.join('');
  return initials;
}

//console.log(findInitials('hello there'));

module.exports = { findInitials };
