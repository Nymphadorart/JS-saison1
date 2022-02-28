
// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    let name = prompt ("Comment t'appelles tu ?")
    let age = prompt ("Quel âge as tu ?")
    let genre = prompt ("Quel est ton genre ?")
    let city = prompt ("Où vis tu ?")

    let rep = confirm ("C'est correct ?" + name + age + genre + city)
    if ( rep == true ) {
        alert ("Ok merci !")
    } else {
        name = prompt ("Comment t'appelles tu ?")
        age = prompt ("Quel âge as tu ?")
        genre = prompt ("Quel est ton genre ?")
        city = prompt ("Où vis tu ?")
        confirm = rep
    }

})();
