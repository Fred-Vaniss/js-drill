/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let table = []
    
        // Génération des nombres
        for(i = 0; i < 10; i++) {
            let nbr = Math.round(Math.random()*99+1)
            table.push(nbr)
            document.getElementById(`n-${i+1}`).innerHTML = nbr
        }

        document.getElementById("min").innerHTML = Math.min(...table);
        document.getElementById("max").innerHTML = Math.max(...table);

        let sum = table.reduce((a,b) => a + b);
        document.getElementById("sum").innerHTML = sum
        document.getElementById("average").innerHTML = sum/table.length
    })
})();