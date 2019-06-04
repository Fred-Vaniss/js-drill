/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let target = document.getElementById("target")
    let text = target.innerHTML
    target.innerHTML = ''

    let size = 1
    let op = 1
    

    for(let i = 0; i < text.length; i++) {
        let span = document.createElement("span")
        span.innerHTML += `${text[i]}`
        size = changeSize()
        span.style.fontSize = `${size}em`
        target.appendChild(span)
    }

    function changeSize(){
        if (size >= 1.4){
            op = 0
        } else if (size <= 0.6){
            op = 1
        }

        switch (op) {
            case 1:
                return size += 0.1;
            case 0:
                return size -= 0.1;
            default:
                break;
        }
    }
})();
