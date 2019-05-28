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
        }
    
        let min = Math.min.apply(null, table);
        let max = Math.max.apply(null, table);
        let sum = table.reduce((a,b) => a + b);
        let avg = sum/table.length
        
        // Affichage des résultats
        for(i = 0; i < 10; i++) {
            let cell = document.getElementById(`n-${i+1}`)
            cell.innerHTML = table[i]
        }
    
        document.getElementById("min").innerHTML = min
        document.getElementById("max").innerHTML = max
        document.getElementById("sum").innerHTML = sum
        document.getElementById("average").innerHTML = avg
    })
})();
