// 07-classes/01-instances/script.js - 7.1: instances


(() => {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        let Skitty = new Cat ("Skitty", 9);
        let Pixel = new Cat ("Pixel", 6);

        console.log(Skitty,Pixel)
        
    });
    
    // Pixel 6ans - Skitty 9ans
})();
