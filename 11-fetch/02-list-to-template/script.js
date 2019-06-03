/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let template = document.getElementById("tpl-hero")
    let item = template.content.querySelector(".hero")

    let target = document.getElementById("target")

    document.getElementById("run").addEventListener("click", async () => {
        try{
            const response = await fetch("http://localhost:3000/heroes")
            const data = await response.json()

            console.log(data)

            data.forEach(element => {
                let hero = document.importNode(item, true)
                let name = hero.getElementsByClassName("name")[0]
                let alter = hero.getElementsByClassName("alter-ego")[0]
                let powers = hero.getElementsByClassName("powers")[0]

                name.textContent = element.name
                alter.textContent = element.alterEgo

                for(i = 0; i < element.abilities.length; i++) {
                    powers.textContent += `${element.abilities}`
                    if (i < element.abilities.length - 1){
                        powers.textContent += ` | `
                    }
                }
                target.appendChild(hero)
            });
        } catch (err) {
            console.error(err)
        }
    })
})();
