/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        let selectId = document.getElementById("hero-id").value

        try {
            let request = await fetch(`http://localhost:3000/heroes/${selectId}`,{
                method: 'DELETE',
                headers: {"Content-Type": "application/json"}
            })
            console.log(request)
        } catch (err) {
            console.error(err)
        }
    })
})();