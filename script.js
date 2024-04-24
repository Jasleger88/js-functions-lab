
const maxOfTwoNumbers = (a, b) => {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(5, 10));

/*
Exercise 2: isAdult()
*/

const isAdult = (a) => {
    if (a >= 18) {
        return "Adult"
    } else {
        return "Minor"
    }
    
}

console.log('Exercise 2 Result:', isAdult(16));

/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel and false otherwise. For the purposes of this exercise, the character y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

const isCharAVowel =(char) => {
    if (char === 'a' || char === 'e'|| char === 'i'|| char=== 'o' || char === 'u'){
    return "true"
} else {
   return "false"  
}
};
console.log('Exercise 3 Result:', isCharAVowel('a'));


function isCHarAVowel(char {
    const vowels = "aeiouAeiou"
    if vowels.includes(char)
    }
      
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


function generateEmail(name, domain) {
    return name + '@' + domain;
}
let email = generateEmail('jasmineleger21', 'gmail.com');
console.log("Excercise 4 result",email);

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a time of day (morning, afternoon, evening)
 and return a personalized greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser (time, name) {
    return `Good ${time}, ${name}`;
}
console.log("Excercise 5 result", greetUser('Morning', "Jasmine"));

/*
Exercise 6: reverseString()

Define a function called reverseString. It should take a string and return 
it with its characters in reverse order. 

Example: reverseString('rockstar') should return the string "ratskcor".

Complete the exercise in the space below:
*/

function reverseString(string) {
    for(let index = 0; index <string.length; index++) {
        const char =string[index]
        console.log(char)
        stringReverse = char + stringReverse
    }
    return stringReverse
}

console.log('Exercise 6 Result', reverseString2("opera"))

/*
Exercise 7: check                      ()

Define a function called checkPalindrome. It should take a string and return true if the string is a 
palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/

function checkPalindrome(string) {
    const stringreverse = reverseString(string)

    if(string === stringreversed) {
        return true
    } else {
        return false
    }
    }
    
   /*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree( num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2>= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
    }
console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));

/*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage 
(as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip (billAmount, tipPercentage) {
    return billAmount * (tipPercentage/100);
}
let billAmount=50;
let tipPerecentage= 20;

console.log('Exercise 9 Result:', "calculateTip(")";

/*
Exercise 10: convertTemperature()

Write a function named convertTemperature. It takes two arguments: a temperature and a string 
representing the scale ('C' for Celsius, 'F' for Fahrenheit). Convert the temperature to
 the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:

 function converTemperature (temperature, scale) {
    if (scale === "C" && temperature === 32) {
        return "89.6 Fahrenheit";
    } else if (scale === "F" && temperature === 0) {
    return "0 Celsius";
 }
    console.log('Exercise 10 Result:', convertTemperature(32, "C"));


Exercise 11: basicCalculator()

Create a function named basicCalculator. It should take three arguments: two numbers
 and a string representing an operation ('add', 'subtract', 'multiply', 'divide'). 
 Perform the provided operation on the two numbers. In operations 
 where the order of numbers is important, treat the first parameter 
 as the first operand and the second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
//
/*
function basicCalculator ()


console.log('Exercise 11 Result:', basicCalculator(10, 5, "subtract"));

/*
Exercise 13: createUsername()

Define a function called createUsername. It should take a first name and a last name and return a username. 
The username should be a combination of the following:
- The first three letters of the first name.
- The first three letters of the last name.
- The total character count of the first and last name combined.

Example: createUsername('Samantha', 'Green') should return 'SamGre12'.

Complete the exercise in the space below:
*/


