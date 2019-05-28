/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let monthList = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
        let spooky = [];
    
        for(m = 1; m < 12; m++) {
            let date = new Date(year,m,13);
            let day = date.getDay();
            
            if (day == 5){
                spooky.push(monthList[m])
            }
        }

        let section = document.getElementsByClassName("material")[0]
        let p = document.createElement("p")
        p.id = "target"

        for (const i of spooky) {
            p.innerHTML += `${i} `
        }

        section.appendChild(p)
    
        console.table(spooky)
    })


    // console.log(date.getDate());
})();
