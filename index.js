// 1. Please write a function that shows the usage of closures

// const multiply = function(x) {
//     return function(y) {
//         return (x * y)
//     }
// }

// const results = multiply(5)
// console.log(results(5));

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

// Solution 1
// const arrayExmaple = [9, 1, 22, 0, 2]

// function calculate(array){
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]
//     }
//     return sum
// }

// console.log(calculate(arrayExmaple))

// Solution 2

// const sum = array.reduce(function(a, b) {
//     return a + b;
//   });

// console.log(sum);

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

// In the example input was missing one array opening
// const arrayExample = [[2, [4, [44,5,6]]], [4,5,6], [[[2,4], 4], 5]]

// const flatten = array => {
//     const flattenArray = []

//     const flattenFunction = array => {
//         for (let i = 0; i < array.length; i++) {
//             if (Array.isArray(array[i])) {
//                 flattenFunction(array[i])
//             } else {
//                 flattenArray.push(array[i])
//             }
//         }
//     }
//     flattenFunction(array)
//     return flattenArray
// }

// console.log(flatten(arrayExample));

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

// const arrayOneExample = ['b', 3, 4, 76, 'c']
// const arrayTwoExmaple = ['a', 'b', 4, 76, 21, 'e']

// function findAllCommonElements(arrayOne, arrayTwo){
//     const result = []
//     for(let i = 0; i < arrayOne.length; i++){
//         for(let j = 0; j < arrayTwo.length; j++){
//             if(arrayOne[i] === arrayTwo[j]){
//                 result.push(arrayOne[i])
//             }
//         }
//     }
//     return result
// }

// console.log(findAllCommonElements(arrayOneExample, arrayTwoExmaple));

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

// const arrayOneExmaple = ['b', 3, 4, 76, 'c']
// const arrayTwoExample = ['a', 'b', 4, 76, 21, 'e']

// function findDifferences (arrayOne, arrayTwo) {
//     let helperArray = [] 
//     let differences = [];
//     for (let i = 0; i < arrayOne.length; i++) {
//         helperArray[arrayOne[i]] = true;
//     }
//     for (let i = 0; i < arrayTwo.length; i++) {
//         if (helperArray[arrayTwo[i]]) {
//             delete helperArray[arrayTwo[i]];
//         } else {
//             helperArray[arrayTwo[i]] = true;
//         }
//     }

//     for (let k in helperArray) {
//         differences.push(k);
//     }
//     return differences;
// }
// console.log(findDifferences(arrayOneExmaple, arrayTwoExample))


// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

// const arrayOneExmaple = [1, 2, 3]
// const arrayTwoExmaple = [4, 5, 6, 7]

// const makeTuples = (arrayOne, arrayTwo) => {
//     const resultArray = []
//     let helperArray = []
    
//     function tuples() {
//         for (let i = 0; i < arrayOne.length; i++) {
//             if (helperArray.length === 2) {
//                 resultArray.push(helperArray)
//                 helperArray = []
//             } else {
//                 helperArray.push(arrayOne[i])
//                 helperArray.push(arrayTwo[i])
//             }
//         }
//     }

//     for (let i = 0; i < arrayOne.length - 1; i++) {
//         tuples(arrayOne, arrayTwo)
//     }

//     return resultArray
// }

// console.log(makeTuples(arrayOneExmaple, arrayTwoExmaple));


// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

// const arrayExample = ['a', 'b', 'c', 'd']
// const objectExample = { a: { b: { c: { d: '23' } } } }
// let helperObj = {}

// const createAccessPath = (array,object) => {
//     for(let i = 0; i < array.length; i++){
//         if(i === 0){
//             helperObj = object[array[i]]
//         } else {
//             helperObj = helperObj[array[i]]
//         }
//     }
//     return helperObj
// }

// console.log(createAccessPath(arrayExample,objectExample));

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

// const objectOneExmaple = { a: 'b', c: 'd' }
// const objectTwoExmaple = { c: 'd', a: 'b' }

// const objectOneExmaple = { a: 'c', c: 'a' }
// const objectTwoExmaple = { c: 'd', a: 'b', q: 's' }

// let countTrue = 0;

// const checkEqualityObject = (objOne, objTwo) => {
//     const keysOne = Object.keys(objOne)
//     const keysTwo = Object.keys(objTwo)

//     if(keysOne.length !== keysTwo.length) return false;

//     for(let i = 0; i < keysOne.length; i++){
//         for(let j = 0; j < keysTwo.length; j++){
//             if(objOne[keysOne[i]] === objTwo[keysTwo[j]]) countTrue++;
//         }
//     }
//     if(countTrue === keysOne.length) return true

//     return false
// }

// console.log(checkEqualityObject(objectOneExmaple, objectTwoExmaple));

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

// const arrayExample = ['color', 'size'];
// const objectExample = { color: 'Blue', id: '22', size: 'xl' }

// const removeElementsFromList = (array, object) => {
//     const objectKeys = Object.keys(object)
    
//     for(let i = 0; i < array.length; i++){
//         for(let j = 0; j < objectKeys.length; j++){
//             if(array[i] === objectKeys[j]) delete object[objectKeys[j]]
//         }
//     }

//     return object
// }

// console.log(removeElementsFromList(arrayExample, objectExample));
