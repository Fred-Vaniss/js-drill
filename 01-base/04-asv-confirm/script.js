/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let confirm = null;

    do{
        let age = prompt("Entrez votre age")
        let sex = prompt("Etes vous un homme ou une femme?")
        let city = prompt("Tu es de quel ville?")

        confirm = prompt(`Tu as ${age} ans, tu es un ${sex} et tu habite à ${city}.\nConfirme-tu ces informations?`)        
    } while (confirm != "oui");
    
})();
