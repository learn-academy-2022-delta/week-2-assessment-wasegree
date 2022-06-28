# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: An argument is information that is passed into a function such as a variable and is indicated by a set of parenthesis. Parameters are labels or placeholders for the argument of a function. For example: 
  
  const num1 = 22
  const addOne = (number) {
    return number + 1
  }
  console.log(addOne(num1))

  In the example above, const num1 = 22 is the information or argument that will be passed into the function when invoked. (number) is my parameter or label and acts soley as a placeholder.

  Researched answer: A function can have parameters that are in place of arguments. However, higher order functions have parameters that are predifined. Function arguments are values and if omitted while invoking a function, the output will be undefined.



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The method .map() takes value, index, and array as its predefined parameters. Value is a required parameter while index and array are optional. Map can extract the index of an element and return the value along with the changes made to the value of an array.

  Researched answer: The higher order functions .map has three predefined parameters. These parameters must be in order of value, index, then array. Although we cannot change the order of the paramters, we are able to rename them. It is common practice when using more than one parameter to label the outputs of an array to indicate whether what is being logged is the value or index of the elements in the array. 



3. What is the difference between map and filter?

  Your answer: The higher order function map will iterate over an array and return a new array of the same length. Filter on the other hand iterates over an array but returns an array of shorter length or elements removed.

  Researched answer: map and filter act only on arrays. Map modifies each element in an array and returns these values in a new array. Filter removes unwanted elements based on a set specifications and returns a new array reflecting the changes.



4. What is the difference between a function and a method?

  Your answer: Functions are reusable code that contain logic. They must be invoked to initate its logic/behavior. Methods are also functions however, methods belong to objects and are used to add logic to objects.

  Researched answer: Functions and methods perform an action based on inputs or specifications. The difference is that methods give functionality to objects. this is a method  that uses dot notation and is used to reference an object inside of itself. 



5. What is object destructuring?

  Your answer: Object destructing provides a pathway to nested key values within a object. Instead of logging the entire pathway to output an objects value, with object destructuring we can assign a variable to the pathway of the nested key.

  Researched answer: Object destructring can make your code clearer and provides a more effiecient way of referencing values in an object. When creating a pathway to a value in an object and assiging it a variable we use curly braces. Within the curly brace is the key and is assigned the value of the pathway.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: 

  Researched answer:



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: This allows the methods of a class to be pass down to a newly declared class. The new class can then have more methods added to it.

2. React: React is a javascript library that developers use to build applications.

3. React state: An object in react that stores data

4. React lifecycle methods: These methods can be modified and has three phases which are mountiing, updating, and unmounting.

5. DOM: Document object model is a program that allows for changes to be made to elements in an interface.
