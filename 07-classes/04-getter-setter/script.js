/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    class Person{
        constructor (fname,lname){
            this._firstName = fname
            this._lastName = lname
        }
        get name(){
            return `${this._firstName} ${this._lastName}`
        }
        set name(name){
            let word = name.toString().split(' ');
            this._firstName = word[0] || '';
            this._lastName = word[1] || '';
        }
    }

    let fred = new Person('Frédérick','Van Isschot')
    console.log(fred.name)
    
    fred.name = 'Franck Boulvain'
    console.log(fred.name)
})();
