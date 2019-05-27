/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    Array.from(document.getElementsByTagName("button")).forEach(btn => {
        btn.addEventListener("click", () => changeColor(btn.id),false)
    });

    let body = document.getElementsByTagName("body")[0]

    let changeColor = (id) => {
        body.style.backgroundColor = id
    }

})();
