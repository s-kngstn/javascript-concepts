/* In the most simple sense, a closure is just a function within a function, 
where the inner function references a variable that was declared in the scope 
of the outer function.

What makes it special in JavaScript is the variable in the outer function will 
be maintained in memory even after that function returns and is popped off the 
call stack. 

This mean the inner function always has access to this state from the outer 
function at the time it was created.

In the code below, you can see I have declared a couple of variables inside of 
the outer function. Then we operate on them and return them from the inner 
function, and then expose the inner function by simply returning it: */

function outer() {
  const beerOnTheWall = "🍻";
  let count = 0;

  function inner() {
    count++;
    return `${count} bottles of ${beerOnTheWall} beer on the wall.`;
  }

  return inner;
}

const func = outer();

console.log(func());
// 1 bottles of 🍻 beer on the wall.
console.log(func());
// 2 bottles of 🍻 beer on the wall.
console.log(func());
// 3 bottles of 🍻 beer on the wall.

/* Because the outer function has closed out the inner function we can call it 
and still have reference to the state in the outer function.

Even though we only call the outer function once, we still have access to its 
local variables. */

/* Closuer can be commonly seen in JavaScript while using a class instance.
 *
 * You have a function that has some state and you have an inner
 * function inside that which can change it's state.
 *
 * In the same way that a Class instance has properties and you have methods
 * that can change those properties.
 *
 * The Class keyword in JavaScript is really just syntactic sugar for
 * functions and closures.
 */
