/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let curDate = new Date()
    let curDay = curDate.getDate()
    let curMonth = curDate.getMonth()+1
    let curYear = curDate.getFullYear()

    let button = document.getElementById("run")

    button.addEventListener("click", () => {
        let day = document.getElementById("dob-day").value
        let month = document.getElementById("dob-month").value
        let year = document.getElementById("dob-year").value

        let age = curYear - year - 1

        if (curMonth == month) {
            if (curDay >= day) {
                age++
            }
        } else if (curMonth > month) {
            age++
        }

        button.innerHTML = `Vous avez ${age} ans`
    })



})();
