/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let pass = document.getElementById("pass-one")
        let confPass = document.getElementById("pass-two")

        console.log(pass.value)

        if (pass.value != confPass.value){
            pass.style.borderColor = "red"
            confPass.style.borderColor = "red"
        } else {
            pass.style.borderColor = "green"
            confPass.style.borderColor = "green"
        }
    })
})();
