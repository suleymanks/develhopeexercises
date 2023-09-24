/*function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}*/

function sum(...numbers) {
    return numbers.reduce((total, curr) => total+curr,0)
}

console.log(sum(11, 2, 3, 23, 5));