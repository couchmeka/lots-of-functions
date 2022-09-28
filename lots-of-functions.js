/* 

function name - sayHi
returning string

*/


function sayHi(nameStr)
{
    let newStr = `Hi, ${nameStr}`;
    return newStr
}

console.log(sayHi("Meka"));
console.log(sayHi("Andrew"));

/*
 function name big String
 compares two strings 
 and returns the larger string
 */

 function bigString(string1, string2)
 {
    if(string1.length > string2.length)
    {
       let returnValue = `${string1} Is the longer string`
       return returnValue

    } else
     {
        let returnValue2 = `${string2} Is the longer string`
     return returnValue2;
     }

 }

 console.log(bigString("adam", "eve"));
 console.log(bigString("eve", "adam"));

 /*
Write a function called bigNumber that takes in 2 numbers and returns which one is greater.
 If the numbers are equal tell the user.

 function name bigNumber
2 numbers compared 
returns whether it is equal, larger
 */

function bigNumber (number1, number2)
{
    if (number1 > number2)
    {
        let response1 = `${number1} is the greater number`
        return response1

    } else if (number2 > number1)
    {
        let response2 = `${number2} is the greater number`
        return response2
    } else 
    {
        let response3 = `${number1} and ${number2} are equal`
        return response3
    }
}

console.log(bigNumber(5,6));
console.log(bigNumber(12,6));
console.log(bigNumber(6,6));

/*
write a function called fiveMore
that adds 5 to each odd number
then returns the updated array
*/


let array1 = [5,4,3,13,6,18,2,1]
let array2 = [6,5,4,3,2,13,15,19]

function fiveMore (array)
{
     let newArray = [];
    for (let index =0; array.length > index; index++)
    {
        if (array[index] % 2 !== 0)
        {
          newArray.push(array[index] + 5);
        } else
        {
            newArray.push(array[index]);
        }
    } 
    return newArray

  
}

console.log(fiveMore(array1));
console.log(fiveMore(array2));

/*
write a function called arraySummer
that adds the array to itself
then returns the updated array
*/

let array3 = [5,4,3,13,6,18,2,1]
let array4 = [6,5,4,3,2,13,15,19]

function arraySummer (array1, array2)
{
let newArray2 = [];
for (let index =0; array1.length > index; index++)
{
      newArray2.push(array1[index] + array2[index]);
} 
return newArray2
}


console.log(arraySummer(array3,array4));


/*
Write a function called everyDivisible that takes in a number 
that is < 10 then prints out every number less than or equal to 100
*/

function everyDivisible(number)
{
    for(let index = 0; index <= 100;index+=number) 
    {
        console.log(index);
    }
}
everyDivisible(5);
everyDivisible(15);