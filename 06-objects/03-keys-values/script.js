// 06-objects/03-keys-values/script.js - 6.3: keys & values


(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    document.getElementById("run").addEventListener("click", () => {
        console.log("D'abbord les clés : ")
        Object.keys(person).forEach((key) => {
            console.log(key);
        });
        console.log("Ensuite les valeurs : ");
        Object.values(person).forEach((values) => {
            console.log(values);
        });
    });    
    // your code here
})();
