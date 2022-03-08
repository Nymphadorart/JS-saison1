// 05-arrays/02-manipulate-array/script.js - 5.2: manipulate array

(() => {
    document.getElementById('run').addEventListener('click', () => {
        let fruits = [
            "pomme",
            "poire",
            "fraise",
            "tomate",
            "orange",
            "mandarine",
            "durian",
            "pêche",
            "raisin",
            "cerise",
        ];
		fruits.pop();
		fruits.shift();
        fruits.unshift("banane");
		fruits.push ("kiwi");
		console.log(fruits);
    });
    // your code here

})();
