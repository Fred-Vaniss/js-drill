/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", async () => {
        try {
            let response = await window.lib.getPosts()
            console.table(response)
            for(i = 0; i < response.length; i++) {
                try {
                    let secResponse = await window.lib.getComments()
                    console.table(secResponse)
                } catch (error) {
                    console.error(error)
                }
            }
        } catch (error) {
            console.error(error)
        }
    })
})();
