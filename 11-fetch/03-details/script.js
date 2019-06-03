/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target =  document.getElementById("target")
    let template = document.getElementById("tpl-hero")
    let item = template.content.querySelector(".hero")

    document.getElementById("run").addEventListener("click", async () => {
        try{
            let response = await fetch("http://localhost:3000/heroes")
            let data = await response.json()

            let chosenId = document.getElementById("hero-id").value
            chosenId = parseInt(chosenId)

            if (chosenId < 1 || chosenId > data.length){
                throw new Error("L'ID entrée est incorrect")
            } else if (isNaN(chosenId)){
                throw new Error("L'ID entrée n'est pas un nombre")
            }

            const findHero = data.find((data) => data.id === chosenId)
            
            let hero = document.importNode(item, true)
            let name = hero.getElementsByClassName("name")[0]
            let alter = hero.getElementsByClassName("alter-ego")[0]
            let powers = hero.getElementsByClassName("powers")[0]

            name.textContent = findHero.name
            alter.textContent = findHero.alterEgo
            for (let i = 0; i < findHero.abilities.length; i++) {
                powers.textContent += `${findHero.abilities}`
                if (i < findHero.abilities.length - 1){
                    powers.textContent += ` | `
                }
            }

            target.appendChild(hero)

        } catch (err) {
            console.error(err)
            window.alert(err)
        }
    })
})();
