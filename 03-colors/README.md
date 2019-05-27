# Série 3: les couleurs
Une série d'exercice sur la manipulation des couleurs par le JavaScript

## 1) Changer le background-color grâce aux bouttons
Quatres bouttons sont placés sur la page et chaque bouttons doit changer la couleur de fond.

Je vais d'abord créer un `event listener` pour chaque bouttons qui vont éxécuter la fonction `changeColor` avec le nom de l'`id` comme argument

```javascript
Array.from(document.getElementsByTagName("button")).forEach(btn=> {
    btn.addEventListener("click", () => changeColor(btn.id),false)
});
```

Je vais ensuite stocker le body de la page dans une variable

```javascript
    let body = document.getElementsByTagName("body")[0]
```

Et enfin, dans la fonction `changecolor` je demande de changer la couleur du body avec la valeur de l'`id` (vu que leurs noms correspondent aux couleurs, je n'ai juste qu'a me servir de ceux-là)

## 2) Changer le background-color grâce à un champ de texte
Je récupére la valeur entrée dans le champ de texte...

```javascript
let input = document.getElementById("color").value
```

...et je le place dans le changement du couleur de fond

```javascript
 body.style.backgroundColor = input
```

## 3) Changer le background-color avec une couleur aléatoire à chaque clique
Ici, j'ai fait en sorte que cela puisse générer un code hexadécimale netre #000000 et #ffffff

Quand je clique sur le boutton, il va créer six variable qui appeleront chacun la fonction `generateNumber()`, va créer une chaine de caractère avec # suivi des six variables et va appliquer ce code exadécimale dans la classe CSS

```javascript
document.getElementById("run").addEventListener("click", () => {
    
    let n1 = generateNumber();
    let n2 = generateNumber();
    let n3 = generateNumber();
    let n4 = generateNumber();
    let n5 = generateNumber();
    let n6 = generateNumber();
    let hex = `#${n1}${n2}${n3}${n4}${n5}${n6}`
    document.getElementsByTagName("body")[0].style.backgroundColor = 
})
```

Cette variable `generateNumber()` va générer un chiffre aléatoire entre 0 et 15. Si ce chiffre est en dessous de 10, il va juste le transformer en *string* et retourner cette valeur, si il est au dessus de 10, il va transformer en lettre de `a` à `f`

```javascript
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
```