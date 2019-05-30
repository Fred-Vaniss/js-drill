/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Animal {
            constructor(name,specie){
                this.name = name
                this.specie = specie
            }
            sayHello(){
                return this.greeting
            }
        }

        class Cat extends Animal {
            constructor(name){
                super(name)
                this.greeting = "meow"
            }
        }
        
        class Dog extends Animal {
            constructor(name){
                super(name)
                this.greeting = "bark!"
            }
        }
    
        let felix = new Cat('Felix');
        let rex = new Dog('Rex')
    
        console.log(felix.sayHello())
        console.log(rex.sayHello())
    })

})();
