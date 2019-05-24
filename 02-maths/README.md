# Série 2: maths <!-- omit in toc -->

- [01-calculator-one](#01-calculator-one)
- [02-calculator-two](#02-calculator-two)
- [03-even-square](#03-even-square)
- [04-sort-numbers](#04-sort-numbers)
- [05-factorial](#05-factorial)
- [06-fizzbuzz](#06-fizzbuzz)

## 01-calculator-one
La première exercice consiste à complèter les fonctions pour que les bouttons déjà intégrés dans le HTML fassent différentes opérations mathématique depuis les champs de texte.

Pour cette première exercice, j'ai créé une fonction supplémentaire qui va chercher les valeurs entrée dans les champs de texte qui va retourner les deux valeurs dans un tableau, cela évitera de recopier les même lignes dans chaque fonction.

``` javascript
function getValues() {
    let opOne = document.getElementById("op-one").value;
    let opTwo = document.getElementById("op-two").value;
    opOne = parseInt(opOne);
    opTwo = parseInt(opTwo);

    return [opOne, opTwo]
}
```

Ensuite pour chaque boutton, il va exécuter cette fonction pour récupérer les valeurs qui seront stocké dans une variable de type tableau.

Chaque boutton va faire l'opération depuis ces deux éléments récupérés et envoyer un message d'alerte

``` javascript
document.getElementById("addition").addEventListener("click", () => {
    // perform an addition
    let values = getValues()
    let result = values[0] + values[1];
    window.alert(`${values[0]} + ${values[1]} = ${result}`)
});
```

## 02-calculator-two
Même principe, sauf qu'il n'y a qu'une fonction pour les quatre bouttons qui ont chacuns un argument lié à son ID et qu'on impose l'utilisation le `switch`.

J'ai repris la même fonction `getValues` que j'ai utilisé dans l'exercice précédent

Au tout début de la fonction, j'appelle cette fonction pour chercher ces valeurs avant de commencer le `switch` et déclare les variables vides

``` javascript
let values = getValues()
let result
let operator
```

Ensuite, avec l'argument de fonction `operation` je fait une comparison switch avec chaque nom d'ID qui aidera à savoir quel opération faire et faire les différentes opération. La variable `operator` n'est là que pour le message d'alerte

``` javascript
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
```

## 03-even-square
J'ai d'abord déclaré une variable vide qui contiendra le message à afficher dans l'alert

```javascript
let msg = ''
```

Ensuite dans une boucle qui défilera de 1 à 21, il vérifiera si chaque chiffre est un multiple de 2.

Si c'est le cas, il multipliera deux fois le nombre et le stockera dans le message.

```javascript
for(i = 1; i < 21; i++) {
    if ((i%2) == 0){
        let carre = i*i
        msg += `${carre}, `
    }
}
```

Une fois la boucle terminé, il affichera le message

```javascript
window.alert(`Voici les carrés des nombres pairs entre 1 et 21:\n${msg}`)
```

## 04-sort-numbers
Récupérer les nombres de l'input et l'afficher du plus petit au plus grand.

J'ai d'abord fait une longue succession de fonctions pour avoir les nombres triés par ordre croissant.

Dans une nouvelle varialble déclaré, je cherche d'abord la valeur de l'input. Le problème c'est que cette valeur est un string. Je vais donc le convertir en tableau avec `split(",")`.
```javascript
let numbers = document.getElementById("numbers").value.split(",")
```

Les valeurs répartis dans le tableau sont chacuns un string, il faut donc que je le transforme en nombre avec `parseInt()` que je fais dans une fonction de `map`
```javascript
let numbers = document.getElementById("numbers").value.split(",")map(function(item){
    return parseInt(item)
})
```

Toujours dans cette même succession de fonctions, je vais ensuite trier le tableau par ordre croissant avec `sort`

```javascript
let numbers = document.getElementById("numbers").value.split(",").map(function(item){
    return parseInt(item)
}).sort(function(a,b){
    return a - b
})
```

Avec tout ça, j'ai mon tableau des nombres transformé et trié rien qu'avec une succession de fonctions.

Ensuite pour l'afficher les résultats, je crée une variable vide ou sera stocké la succession de valeurs en string et je fais une boucle for qui stockera chaque valeurs dans cette variable

```javascript
let sorted = ""
for (const i of numbers) {
    sorted += `${i}, `
}

window.alert(`Voici les nombres triés du plus petit au plusgrand:\n${sorted}`)
```

## 05-factorial
Récupérer le nombre de l'input et afficher sa factorielle

Il m'a juste suffit de récupérer la valeur de l'input en tant que valeur limite pour la boucle. A chaque boucle il va multiplier la dernière valeur calculé par la valeur de la boucle.

```javascript
let input = document.getElementById("number").value
let result = 1
for(i = 1; i <= input; i++) {
    result = result * i
}
window.alert(`La factorielle de ${input} est de ${result}`)
```

## 06-fizzbuzz
Pour chaque nombre de 1 à 100: afficher "fizz" pour les multiples de 3, "Buzz" pour les multiples de 5, "FuzzBuzz" pour les deux ou juste afficher le nombre si ce n'est aucun de ces trois conditions.

C'était pour moi l'exercice la plus simple de cette série, il suffit juste de faire une succession de conditions dans une boucle qui défile chaque nombre jusqu'à 100.

```javascript
for(i = 1; i <= 100; i++) {
    if((i%3)==0 && (i%5)==0){
        console.log("FizzBuzz")
    } else if ((i%3)==0) {
        console.log("Fizz")
    } else if ((i%5)==0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
```