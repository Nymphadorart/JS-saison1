//07-classes/02-methods/script.js - 7.2: methods


(() => {

    class Personne {
        constructor(firstname, lastname) {
            this.firstname = firstname
            this.lastname = lastname
        }
    
        sayHello = () => {
            return "Hello " + this.firstname + " " + this.lastname + " !"
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        let person = new Personne ( "Anaïs" , "Bossouw")
        console.log(person.sayHello())
    });
    // your code here
})();
