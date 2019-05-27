/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let output = document.getElementById("target")
    let date = new Date();

    let day = date.getDay();
    let dayArray = ["Dimanche", "Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
    
    let month = date.getMonth();
    let monthArray = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]

    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();

    output.innerHTML = `${dayArray[day]} ${day} ${monthArray[month]} ${year}, ${hours}h${minutes}`;
})();
