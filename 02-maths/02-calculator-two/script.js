/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation
        let values = getValues()
        let result
        let operator
        switch (operation) {
            case "addition":
                result = values[0]+values[1]
                operator = "+"
                break;
            case "substraction":
                result = values[0]-values[1]
                operator = "-"
                break;
            case "multiplication":
                result = values[0]*values[1]
                operator = "*"
                break;
            case "division":
                result = values[0]/values[1]
                operator = "/"
                break;
        
            default:
                break;
        }
        window.alert(`${values[0]} ${operator} ${values[1]} = ${result}`)
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );

    function getValues() {
        let opOne = document.getElementById("op-one").value;
        let opTwo = document.getElementById("op-two").value;

        opOne = parseInt(opOne);
        opTwo = parseInt(opTwo);
    
        return [opOne, opTwo]
    }

})();
