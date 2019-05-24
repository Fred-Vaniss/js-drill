/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here
        let input = document.getElementById("number").value
        let result = 1
        for(i = 1; i <= input; i++) {
            result = result * i
        }
        window.alert(`La factorielle de ${input} est de ${result}`)
    });
})();
