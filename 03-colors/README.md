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

## 3) Changer le background-color avec une couleur aléatoire à chaque click

