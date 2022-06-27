// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Delta 2022"
//console.log(cohort.split(""))

// a) Your answer: Delta 2022 will be placed in an array with each letter at its own index.
// b) Verify and explain: [D,E,L,T,A,2,0,2,2] was the output. This is because the split method converts strings to arrays. When split is given an argument of ("") javascript will seperate each letter including the space inbetween Delta and 2022 into an array at seperate indexes. 


// --------------------2) What will this log?

const greeter = (name) => {
    `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I think Hello undefined will be logged.
// b) Verify and explain: Undedfined was logged in the terminal because the proper syntax for describing the output of a function return was missing from the function.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: The terminal will show all numbers returned in a new array multiplied by 2. [8, 10, 12, 14, 16]
// b) Verify and explain: The output was [8, 10, 12, 14, 16]. The higher order function .map iterates over an array, and returns a new array with modified values.


// --------------------4) What will this log?

//var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: A new array with only odd values will be logged 
// b) Verify and explain: [11, 13, 15] was the output. The higher order function .filter() iterates over an array and returns a new array with less elements. In this case the use of .filter was used to return a new array with only odd numbers.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript will be the output
// b) Verify and explain: Javascript was logged to terminal. To access an objects key value javascript uses dot notation. Since the key languages has an array for a value, bracket notations was used to access the "Javascript" at index 0.


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Bravo",
    this.year = 2022
  }
}
// var learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: The output will George as the value of the key: student followed by the cohort and year.
// b) Verify and explain: Logged to terminal was, Learn { student: 'George', cohort: 'Bravo', year: 2022 }. The key word new created a new instance of the object and stored it in the variable, learnStudent. The method constructor takes an argument to be passed as the value of the a key.
