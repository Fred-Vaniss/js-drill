/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let buttons = document.getElementsByTagName("button")

    for (const button of buttons) {
        button.addEventListener("mousedown", e => {
            let min = e.target.getAttribute("data-min")
            let max = e.target.getAttribute("data-max")
            let value = e.target.innerHTML
            
            if (value == max){
                value = min
            } else {
                value++
            }

            if (value < 10 && value != "00") {
                value = `0${value}`
            }

            e.target.innerHTML = value

            changeTarget()
        })
    }
        
    function changeTarget(){
        let vOne = document.getElementById("part-one").innerHTML;
        let vTwo = document.getElementById("part-two").innerHTML;
        let vThree = document.getElementById("part-three").innerHTML;
        let vFour = document.getElementById("part-four").innerHTML;
        let target = document.getElementById("target")

        target.innerHTML = `+${vOne}${vTwo}${vThree}${vFour}`
    }
    
})();
