/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async (e) => {
        let nameField = document.getElementById("hero-name").value
        let alterField = document.getElementById("hero-alter-ego").value
        let powerField = document.getElementById("hero-powers").value.split(',')

        let data = {
            name: nameField,
            alterEgo: alterField,
            abilities: powerField
        }

        try {
            let request = await fetch("http://localhost:3000/heroes", {
                credentials: 'omit',
                method: 'POST',
                body: JSON.stringify(data),
                headers: {"Content-Type": "application/json"}
            })
            console.log(request)
        } catch (err) {
            console.error(err)
        }
        
        return false;
    })
})();
