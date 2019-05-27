/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        
        let n1 = generateNumber();
        let n2 = generateNumber();
        let n3 = generateNumber();
        let n4 = generateNumber();
        let n5 = generateNumber();
        let n6 = generateNumber();

        let hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`

        console.log(hex)

        document.getElementsByTagName("body")[0].style.backgroundColor = hex
    })

    let generateNumber = () => {
        number = Math.round(Math.random()*15)

        if (number < 10){
            return number.toString()
        } else {
            switch (number) {
                case 10:
                    return "a"
                case 11:
                    return "b"
                case 12:
                    return "c"
                case 13:
                    return "d"
                case 14:
                    return "e"
                case 15:
                    return "f"
            
                default:
                    break;
            }
        }
    }

})();
