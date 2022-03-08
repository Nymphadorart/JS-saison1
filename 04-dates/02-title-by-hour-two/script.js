
// 04-dates/02-title-by-hour-two/script.js - 4.2: text according to the hour (2)


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    
    let today = new Date ();
    
    function message() {

        let hours = today.getHours();
        let time = today.getMinutes();
        
        if(hours>=6 && (hours<17 && time <=30) )
        document.getElementById("target").innerHTML = "Hello !"

        else 
        document.getElementById("target").innerHTML = "Good Evening !"
    } 
    message()

    // your code here

})();
