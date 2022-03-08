// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    document.getElementById("run").addEventListener("click", () => {
        let object = {
            lastname: "Bossouw",
            firstname: "Anaïs",
            age: 27,
            city: "Nivelles", 
            country: "Belgium"

        }
        console.log(object)
    });
    // your code here
})();
