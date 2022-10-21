// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function askName() {
  console.log("Hello, what is your name?");
}

// First, I adjusted the function name to be more precise and utilizes the present imperative.
// I added a semicolon to the end of the console log statement for correct syntax. 



// EX 2:
function addNums(num1, num2, num3) {
  var sum = num1 + num2 + num3;
  return (sum);
      }

console.log(`I visited over ${addNums(2, 8, 9)} shops today at the mall!`)

// I shortened the function name to addNums for efficiency and updated parameter names 
  //to better represent the reason of the function. 
// I indented the code block and added semicolon after the variable for best syntax pratices.
// I utilized the return keyword to return the sum instead of console.log so that the interpreter would return the sum.
// I utilzed a console log statement with interpolation to best showcase the function addNums ability. 



// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// I corrected 'func' to function so that the function would be called properly and added 1 space between parentheses
  // and open curly brackets. 
// I also moved the the closing curly bracket down to the next line for correct syntax.  

  //  EX 4:
  function average(num1, num2) {
    var avg = (num1 + num2) / 2;
    return (avg);
  }
console.log(`The average is: ${average(6, 10)}.`);

  // I moved the opening curly bracket to the first linefor best syntax. 
  // I removed the var sum and adjusted var avg to consolidate the adding of num1 and num2, then dividing by 2. 
    // This would remove an extraneous step as the math can be performed properly in one line. 
 // I moved the console.log statement to outside of the code block so that it would run properly. 
 // I adjusted the interpolation to include the function name and arguments within parentheses to ensure 
    // that the correct average would print to the console. 