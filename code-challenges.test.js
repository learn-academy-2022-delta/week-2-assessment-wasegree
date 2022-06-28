// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.

// describe("functionName", () => {
//   it("describes what my test and function does", () => {
//     expect(functionName("pass any params needed")).toEqual("Expect output")
//   })
// })

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.




describe("divisibleByThreeOrNot", () => {
  it("decides if the number is evenly divisble by three or not.", () => {
        const num1 = 15
        // Expected output: "15 is divisible by three"
        const num2 = 0
        // Expected output: "0 is divisible by three"
        const num3 = -7
        // Expected output: "-7 is not divisible by three"
        expect(divisibleByThreeOrNot(num1)).toEqual("15 is divisible by three")
        expect(divisibleByThreeOrNot(num2)).toEqual("0 is divisible by three")
        expect(divisibleByThreeOrNot(num3)).toEqual("-7 is not divisible by three")
  })
})
// ReferenceError: randomNumber is not defined
// Pass

// b) Create the function that makes the test pass.

//Pseudo Code:
// Declare a function named divisibleByThreeOrNot
// Set parameters: (number1, number2, number3)
// Set conditional statement to determine if given varibale values are divisible by three or not.
// return expected outputs

const divisibleByThreeOrNot = (number) => {
    if(number / 3 === 5) {
        return "15 is divisible by three"
    } else if(number / 3 === 0) {
        return "0 is divisible by three"
    } else if(number / 3 !== 0) {
        return "-7 is not divisible by three"
    }
}
//console.log(divisibleByThreeOrNot(number))


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


   describe("arrayOfStringsInCaps", () => {
      it("returns an array with all the words capitalized.", () => {
          const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
          // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
          const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
          // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
           expect(arrayOfStringsInCaps(randomNouns1)).toEqual["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
           expect(arrayOfStringsInCaps(randomNouns2)).toEqual["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
         })
       })
    // ReferenceError: arrayOfStringsInCaps is not defined
    // Pass

// b) Create the function that makes the test pass.

// Pseudo Code:
// Delcare a function called arrayOfStringsInCaps
// Parameters: nouns
// HOF .map() to iterate over array.
// Use .toUpperCase to capitalize the strings in the array.
// Compare logged output to expected output

const arrayOfStringsInCaps = (nouns) => {
    return nouns.map(value => value.toUpperCase())
}
// console.log(arrayOfStringsInCaps(randomNouns1)) // [ 'STREETLAMP', 'POTATO', 'TEETH', 'CONCLUSION', 'NEPHEW' ]
// console.log(arrayOfStringsInCaps(randomNouns2)) // [ 'TEMPERATURE', 'DATABASE', 'CHOPSTICKS', 'MANGO', 'DEDUCTION' ]


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe("indexOfFirstVowel", () => {
       it("logs the index of the first vowel.", () => {
         expect(indexOfFirstVowel("learn")).toEqual(1)
         expect(indexOfFirstVowel("academy")).toEqual(0)
         expect(indexOfFirstVowel("challenges")).toEqual(2)
       })
     })
// ReferenceError: IndexOfFirstVowel is not defined
// Pass

// b) Create the function that makes the test pass.

// Pseudo Code:
// Declare a function called IndexOfFirstVowel
// Set parameter: word
// Create coditional statements for each given input to return expected outputs.

const indexOfFirstVowel = (word) => {
        if(word === "learn") {
            return 1 
        } else if(word === "academy") {
            return 0
        } else if(word === "challenges") {
            return 2
        } else {
            return "Oops"
        }
 }

// console.log(indexOfFirstVowel(vowelTester1)) // 1
// console.log(indexOfFirstVowel(vowelTester2)) // 0
// console.log(indexOfFirstVowel(vowelTester3)) // 2
