
// 04-dates/04-locale-date/script.js - 4.4: textual date


(() => {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    
    
    let date = new Date ();
    const day = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const formaDate = (date) => {
        document.getElementById("target").innerHTML = day[date.getDay()] + month[date.getMonth()] + date.[getYear()];
        return formaDate;
    }

    // Pas fini, ne fonctionne pas.

})();
