/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    let target = (document.getElementById("target"))
    
    function typeWriterInit (message) {
        let i = 0
        console.log(`Typing ${message}`)
        typeWriter(i,message)
    }

    function typeWriter (i,message) {
        let delay = Math.round(Math.random()*250+50)
        setTimeout(() => {
            target.innerHTML += message.charAt(i)
            console.log(`Typed ${message.charAt(i)} (i=${i}) in ${delay}ms`)

            i++

            if (i < message.length){
                typeWriter(i,message)
            } else {
                console.log("Function completed succefully")
            }
        }, delay);
    }

    typeWriterInit("And another thing: you're ugly!")

})();
