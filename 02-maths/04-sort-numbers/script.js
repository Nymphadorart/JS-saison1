// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let n = document.getElementById("numbers").value;

        let arr = [n] ;
        arr = n.split(",")
        let arr_sort = arr.sort((a, b) => a - b);
        alert(arr_sort)
    });

    /*document.getElementById("run").addEventListener("click", () => {

        let x = new Array(2, 4, 14, 10, 90, 23, 16);
        x.sort((a, b) => a - b);
        alert(x)

        // your code here

    });*/

})();
