
// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {


    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log("Fizz");
        } else if ((i % 5 === 0) && !(i % 3 === 0)) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        if ((i % 5 === 0 && i % 3 === 0)) {
            console.log("FizzBuzz");
        }
    }
    // your code here

})();
