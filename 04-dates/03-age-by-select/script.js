
// 04-dates/03-age-by-select/script.js - 4.3: calculate the age


(() => {

    let date = new Date ()

    document.getElementById("run").addEventListener("click", function (){
            
        function getAge(date) { 
            var diff = Date.now() - date.getTime();
            var age = new Date(diff); 
    
            return Math.abs(age.getUTCFullYear());
        }
        
        
        let day = document.getElementById("dob-day");
        let month = document.getElementById("dob-month");
        let year = new Number (document.getElementById("dob-year"));
        alert(getAge("dob-day", "dob-month", "dob-year")); //Date(année, mois, jour)    
        //alert("You are" + () + "years old");
        
    });
        
    // Pas reussi

})();