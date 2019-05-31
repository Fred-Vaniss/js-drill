/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let pass = document.getElementById("pass-one")
    let valid = document.getElementById("validity")

    pass.addEventListener("input", () => {
        if(pass.value.length >= 8){
            let digits = 0
            for (const i of pass.value) {
                if(Number.isInteger(parseInt(i))){
                    digits++
                }
            }
            if(digits >= 2){
                valid.innerHTML = "ok"
            } else {
                valid.innerHTML = "Pas ok"
            }
        } else {
            valid.innerHTML = "Pas ok"
        }
    })

    // console.log(Number.isInteger(parseInt(str[3])))
    
})();
