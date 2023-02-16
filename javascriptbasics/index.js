// // console.log("welcome to disney");


// // // console.log("Hello World");
// // // alert("me");
// // // document.write("this is document write")


// // // console.log("Hello World", 4 + 6, "Another log");
// // // console.warn("this is warning");
// // // console.error("This is an error");

// // // 3. JavaScript Variables
// // // What are Variables? - Containers to store data values

// // var number1 = 34;
// // var number2 = 56;
// // // console.log(number1 + number2);

// // // 4. Data types in JavaScript
// // // Numbers
// // var num1 = 455;
// // var num2 = 56.76;

// // // String
// // var str1 = "This is a string";
// // var str2 = 'This is also a string';

// // // Objects
// // var marks = {
// //     ravi: 24,
// //     shubham: 87,
// //     krishna: 99.977
// // }
// // // console.log(marks);

// // var n = null;
// // // console.log(n);
// // /*
// // At a very high level, there are two types of data types in JavaScript
// // 1. Primitive data types: undefined, null, number, string, boolean, symbol
// // 2. Reference data types: Arrays and Objects
// // */

// // var arr = [1, 2, "bablu", 4, 5]
// // // console.log(arr)

// // // Operators in JavaScript
// // // Arithmetic Operators
// // var a = 100;
// // var b = 10;
// // console.log("The value of a + b is ", a + b);
// // console.log("The value of a - b is ", a - b);
// // console.log("The value of a * b is ", a * b);
// // console.log("The value of a / b is ", a / b);


// // // Comparison Operators
// // var x = 34;
// // var y = 56;
// // console.log(x == y);
// // console.log(x >= y);
// // console.log(x <= y);
// // console.log(x > y);
// // console.log(x < y);



// // // for (let i = 0; i < 6; i++) {
// // //    if ( i % 2 === 0) {
// // //    console.log(i);

// // //    }

// // //    }

// // // let number = max(44, 7)
// // // console.log(number)
// // // function max(a, b) {
// // //     return (a > b) ? a : b
// // // }


// // // const output = FizzBuzz(5);
// // // console.log(output);

// // // function FizzBuzz(input) {

// // //     if (typeof input !== 'number') {
// // //         return "Not a Number";
// // //     }
// // //     if (input % 5 === 0 && input % 3 === 0) {
// // //         return ('FizzBuzz')
// // //     }

// // //     if (input % 3 === 0) {
// // //         return ('Fizz')
// // //     }

// // //     if (input % 5 === 0) {
// // //         return ('Buzz')
// // //     }

// // //     return (input);



// // // }

// //  console.log(sum(10));

// // function sum(limit) {

// // let sum = 0;
// // for (let i = 0; i <= limit; i++) 
// //     if (i % 3 === 0 || i % 5 === 0) 
// //         sum += i;
    
    

// //     return sum;
// // }



// //arrays 
// // const numbers1 = [3, 4, 5];
// // // end
// // numbers1.push(6,7);
// // // begining
// // numbers1.unshift(1,2);
// // // middle
// // numbers1.splice(3,0,'a','www')
// //  console.log(numbers1 );


// //sorting and reversing arrays
// const array=[5,3,7,3,9,2,9,4,1,]

// // array.sort();
// // console.log(array)
// // array.reverse()
// // console.log(array)

// // testing araary
// const arr=[1,2,3,4,5,6,-1]

// // const allpositive=arr.every(function (value) {
// //     return value >= 0;
// // })
// // console.log(allpositive)

// // const atleastpositive=arr.some(function (value) {
// //     return value >= 0;
// // })
// // console.log(atleastpositive)

// // const filtered=arr.filter(value => value >= 0);

// // console.log(filtered)


// // reducing array

// // const reduce =arr.reduce
// // ((accumulator, currentvalue) => accumulator + currentvalue);
// // console.log(reduce);

// // includes searchelements
// const sos =[1,2,3,4,5,6,7,8]

// // console.log(includes(sos, 9876));
// // function includes(array,searchElement) {
// //     for(let element of array)
// //     if(element === searchElement)
// //      return true;
// //    return false;
// // }

// // excludes
// // const output = except (sos,[1,2,3,4,5]);
// // console.log(output)

// // function except(array,excluded) {
// //     const output = [];
// //     for (const element of array) 
// //     if (!excluded.includes(element))
// //     output.push(element);
// //     return output;    
    
// // }

// const max =getMax([1,2,3,4,5,6,7,8]);
// console.log(max)

// function getMax(array) {
//     if (array.length === 0) return undefined;

//    return array.reduce((accumulator, current) =>  current > accumulator ? current:accumulator)
    
// }

// //arguments
// function sum() {
//     let total = 0;
//     for (const value of arguments) 
//     total+=value;
//     return total;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9))

// function intrest(principal,rate,year) {
//     return principal * rate /100 * year;

    
// }
// console.log(intrest(10000,3,3))




// // arguments exersise

// console.log(sum(1,2,3,4,5,76543))
// function sum(...items) {
// return items.reduce((a,b) => a+b);

    
// }



// // //finding elements primitive types
// // // const numbers = [1, 2, 3, 4,1, 5];
// // // console.log(numbers.indexOf(1));
// // // console.log(numbers.includes(1));
// // // console.log(numbers.lastIndexOf(1));


// // //removing elements
// // const numbers = [1, 2, 3, 4,1, 5];
// // console.log(numbers);
// // const last = numbers.pop();
// // // console.log(numbers);
// // // console.log(last);

// // //begining
// // const start = numbers.shift()
// // // console.log(numbers);
// // //  console.log(start);

// // const middle =numbers.splice(2,2)
// // //  console.log(numbers);
// // //  console.log(middle);

// // //combining array
// // const first= [ 1,2,3];
// // const second= [4,5,6];

// //  console.log(first.concat(second));




// //  var countTrue=([true, false, false, true, false]) 
// //  console.log(countTrue);
// //  var count=countTrue.filter(Boolean).length

// // console.log(count);
// // //  console.log(countTrue.includes(true));
 

// // var countTrue=([false, false, false, false])
// // console.log(countTrue);

// //  console.log(count);
// // // countTrue([]) 


const minMax=[1, 2, 3, 4, 5];


let minElement = minMax.reduce((a, b) => {
    return Math.min(a, b);
});
let maxElement = minMax.reduce((a, b) => {
    return Math.max(a, b);
});
console.log(minElement);

console.log(maxElement);


// // // minMax([2334454, 5]) ➞ [5, 2334454]

// // // minMax([1]) ➞ [1, 1]



// // const greet = name => {
// //     // return(`Hello ${name} how are you doing today `)


// //     }; console.log(greet('Ryan')); // "Hello, Ryan how are you doing today?"
// //     console.log(greet('Sara')); // "Hello, Sara how are you doing today?"



//     const getCount = str => {
//           // Your solution
 
     

//         }; console.log(getCount('my pyx')); // 0
//         console.log(getCount('pear tree')); // 4
//         console.log(getCount('abracadabra')); // 5
//         console.log(getCount('o a kak ushakov lil vo kashu kakao')); // 13





// const getMiddle = str => {
//     var middle = Math.floor(str.length/2);
//     if (str.length % 2 == 0)
//         return str[middle-1] + str[middle];
//     else
//         return str[middle]; 
//     };
    
//     console.log(getMiddle('test')); // 'es'
//     console.log(getMiddle('testing')); // 't'
//     console.log(getMiddle('middle')); // 'dd'
//     console.log(getMiddle('A')); // 'A'



//     const arrNumber=[13 ,89,2,2,3,4,65,6,6,6,3,5]

// const duplicates=arrNumber.filter((ele,index,arr) => arr.indexOf(ele)!==index)
// console.log(duplicates)



// const intarr=[1,2,3,4,5,6,7,8,9]
// const largestv =(arr )=>{
// firstlargestv=Math.max(...arr)
// return(firstlargestv)

// }

// console.log(largestv(intarr))

// const arraay=[5,3,7,3,9,2,9,4,1,]
// arraay.sort();
// console.log(arraay);
// arraay.reverse()
// console.log(arraay);
 

// const reversing = (str) =>{
//     const arr = str.split("");
//     arr.reverse();
//     str = arr.join("");
//     console.log(str);
// }

// reversing("appleeee");

// //to find palindrome
// const ispalindrome= (str)=> {
//     const arr = str.split("").reverse().join("");
//     console.log(str===arr);

// }
// ispalindrome('121');

// //to find maxcharacter
// const maxChar = (str)=>{
//     let obj ={};

// for ( let char of str)
// (!obj[char])? obj[char]=1 : obj[char]++
// console.log(obj);

// let maxnum=0;
// let maximumchar=0;

// for (const char in obj) {
//   if(obj[char] >= maxnum){
//     maxnum = obj[char]
//     maximumchar=char;

//   }
   
//     }
//     console.log(`${maximumchar} appears ${maxnum} `)
// }

// maxChar("palllllassH##%$")






var arraya=[1, 2, 3,4,34,42,423,44, 4, 5];

var sum=0;
for (let i = 0; i < arraya.length; i++) {
   sum = sum + arraya[i];
  

}
console.log("the sum is " + sum)


var str= "palash"

var output = str.split('').reverse().join('')
console.log(output)

const reversing = (str) =>{
  const arr= str.split('')
  arr.reverse()
  str = arr.join('')
  console.log(str)
  

}
reversing("apple")

var num1= 3;
var num2= 5;

if (num1 > num2) {
  console.log(num1)

  
}else{
  console.log(num2)

}


const arraofs = ['dog','cat']

// const convert =  arraofs.map(str => str.toUpperCase() )
// console.log(convert)


const arraofstring = ['dog','cat']

const convert =[]
for (let i = 0; i < arraofstring.length; i++) {
  convert[i]= (arraofstring[i].toUpperCase());

  
}
console.log(convert)




const even = [1,2,3,4,5,6,7,8,9]

// const sum1= even.filter(str => str % 2=== 0)
// console.log(sum1)

// const sum1=[]
// for (const num in even) {
//   if (num % 2 === 0) {
//    sum1.push(num);
//   }
//   console.log(sum1)
// }

const palindrome = (str) => {


  const arrr = str.split("").reverse().join("")
  console.log(str===arrr)
}

palindrome('anna')

function processData(myArray) {
myArray.sort((a,b) => a-b)


}