// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {

        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
        //static(greeting){this.greeting = greeting}
    }

    class Dog extends Animal {
        constructor(greeting, name) {
            super(greeting,name);
            (this.constructor.greeting = greeting),
            (this.name = name);
        }

    }

    class Cat extends Animal {
        constructor(greeting, name) {
            super(constructor.greeting,name);
            (this.contructor.greeting = greeting),
            (this.name = name);
        }
    }

    document.getElementById("run").addEventListener("click", () => {

        let myCat = new Cat ("Hi", "Sirius");
        let myDog = new Dog ("Hello", "Pepsy");
        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
    
    // your code here
})();
