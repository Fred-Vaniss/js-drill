/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value



    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let values = getValues()
    
        let result = values[0] + values[1];
        window.alert(`${values[0]} + ${values[1]} = ${result}`)
    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let values = getValues()
    
        let result = values[0] - values[1];
        window.alert(`${values[0]} - ${values[1]} = ${result}`)
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let values = getValues()
    
        let result = values[0] * values[1];
        window.alert(`${values[0]} * ${values[1]} = ${result}`)

    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let values = getValues()
    
        let result = values[0] / values[1];
        window.alert(`${values[0]} / ${values[1]} = ${result}`)

    });

    function getValues() {
        let opOne = document.getElementById("op-one").value;
        let opTwo = document.getElementById("op-two").value;

        opOne = parseInt(opOne);
        opTwo = parseInt(opTwo);
    
        return [opOne, opTwo]
    }
})();
