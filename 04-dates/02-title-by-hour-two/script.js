/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    let curTime = hours*60+minutes

    console.log(curTime)

    let output = document.getElementById("target")
    if (curTime < 1050) {
        output.innerHTML = "Bonjour"
    } else {
        output.innerHTML = "Bonsoir"
    }

})();
