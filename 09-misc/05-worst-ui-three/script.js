/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let inputs = document.getElementsByTagName("input")
    let speed = 50

    let cycleOne = setInterval(() => cycleNumbers(inputs[0]),speed)
    let cycleTwo = setInterval(() => cycleNumbers(inputs[1]),speed)
    let cycleThree = setInterval(() => cycleNumbers(inputs[2]),speed)
    let cycleFour = setInterval(() => cycleNumbers(inputs[3]),speed)

    function cycleNumbers (input) {
        let min = input.getAttribute("data-min")
        let max = input.getAttribute("data-max")
        
        if (input.value == max){
            input.value = min
        } else {
            input.value++
        }
        
        if (input.value < 10 && input.value != "00") {
            input.value = `0${input.value}`
        }
    }

    let buttons = document.getElementsByTagName("button")

    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            switch (e.target.id) {
                case "fix-part-one":
                    clearInterval(cycleOne)
                    break;
                case "fix-part-two":
                    clearInterval(cycleTwo)
                    break;
                case "fix-part-three":
                    clearInterval(cycleThree)
                    break;
                case "fix-part-four":
                    clearInterval(cycleFour)
                    break;
            }
        })
    }

    setInterval(() => changeTarget(),speed)

    function changeTarget(){
        let vOne = document.getElementById("part-one").value;
        let vTwo = document.getElementById("part-two").value;
        let vThree = document.getElementById("part-three").value;
        let vFour = document.getElementById("part-four").value;
        let target = document.getElementById("target")

        target.innerHTML = `+${vOne}${vTwo}${vThree}${vFour}`
    }

})();
