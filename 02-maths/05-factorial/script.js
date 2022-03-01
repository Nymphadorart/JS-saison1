
// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value




    document.getElementById("run").addEventListener("click", () => {

        let n = new Number(document.getElementById("number").value);

        function calculate(n) {
            for (let i = n - 1 ; i >= 1 ; i --){

                n *= i;
        
            }
            return n;
        }
        alert(calculate(n));
        
        // your code here

    });

})();
