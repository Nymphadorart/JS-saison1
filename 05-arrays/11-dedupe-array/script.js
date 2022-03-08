// 05-arrays/11-dedupe-array/script.js - 5.11: de-dupe the array


(() => {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById('run').addEventListener('click', () => {
        let uniqueFruits = [];
		fruits.forEach((fruits) => {
			if (!uniqueFruits.includes(fruits)) {
				uniqueFruits.push(fruits);
			}
		});
		console.log(uniqueFruits);
	});
    // your code here

})();
