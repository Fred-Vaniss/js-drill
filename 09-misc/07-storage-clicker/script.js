/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target")
    let nbr = localStorage.getItem("beCodeClicker");

    if (!nbr){
        console.warn("Aucune donnée local trouvée, création d'une nouvelle")
        nbr = 0
        localStorage.setItem("beCodeClicker", nbr)
    } else {
        console.log(`Donnée local chargée: ${nbr}`)
    }

    target.innerHTML = nbr

    document.getElementById("increment").addEventListener("click", () => {
        nbr++

        target.innerHTML = nbr

        localStorage.setItem("beCodeClicker", nbr)
    })
})();
