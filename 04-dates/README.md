# Série 4: les dates
Une série d'exercices sur la manipulation des dates

## 1) Titre par heure
Changer le contenu de la page par "Bonjour" (si il est moins de 18h00) ou par "Bonsoir"

Je vais juste récupérer l'heure locale dans une variable...
```javascript
let curTime = new Date().getHours();
```
... et faire une condition si il est inférieur à 18 ou pas.

## 2) Titre par heure et par minute
Même instruction que l'exercice précédent mais si il est moinde de 17h30

Là maintenant je vais récupérer la date et ensuite récupérer l'heure et les minutes

```javascript
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
```

Dans une nouvelle variable, comme il y a 60 minutes dans une heure, je vais prendre l'heure, multiplier par 60 et ajouter les minutes

```javascript
let curTime = hours*60+minutes
```

17h30 vaut 1050 minutes, je vais donc mettre ma condition sur cette valeur

```javascript
if (curTime < 1050) {
    output.innerHTML = "Bonjour"
} else {
    output.innerHTML = "Bonsoir"
}
```

## 3) Calculateur d'age
Il y a trois liste déroulantes où on sélectionne le jour, le mois et l'année. Au clic sur le boutton, récupérer la date de naissance du visiteur et afficher son âge exact.

Je crée différentes variables pour récupérer le jour, le mois et l'année courante (je rajoute +1 au mois étant donnés que celui-ci commence à partir de 0)

```js
let curDate = new Date()
let curDay = curDate.getDate()
let curMonth = curDate.getMonth()+1
let curYear = curDate.getFullYear()
```

Au clic sur le boutton, il va récupérer les valeurs des différents listes déroulants et va calculer l'age. Il va d'abord retirer 1 à l'age car je vais faire des tests de conditions par après.

```js
button.addEventListener("click", () => {
    let day = document.getElementById("dob-day").value
    let month = document.getElementById("dob-month").value
    let year = document.getElementById("dob-year").value
    let age = curYear - year - 1
}
```

Je vais donc lui faire des tests si le mois est égal au mois courant, lui faire faire ensuite un test avec le jour, si vrai alors ajouter 1 à l'âge.

Sinon, juste tester si le mois courrant est plus grand que le mois alors ajouter 1 à l'âge.

Si les deux conditions ne sont pas remplies, alors laisser l'âge tel quel.

```js
if (curMonth == month) {
    if (curDay >= day) {
        age++
    }
} else if (curMonth > month) {
    age++
}
```

## 4) Date textuelle
Retranscrire la date et l'heure sur la page en français.

Même chose, on stock la date dans une variable.

Pour le jour, je vais récupérer le numéro du jour et créer un tableau avec chaque jour de la semaine.

```javascript
let day = date.getDay();
let dayArray = ["Dimanche", "Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi"]
```

Pareil pour le mois
```javascript
let month = date.getMonth();
let monthArray = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]
```

## 5) Afficher les vendredi 13 sur une année
D'abord je récupère l'année entrée, desse une liste des mois en français et crée un tableau vide ou seront stockés les mois contenant un vendredi.

```js
let year = document.getElementById("year").value;
let monthList = ["Janvier","Février","Mars","Avril","Mai""Juin","Juillet","Août","Septembre","Octobre","Novembre""Décembre"];
let spooky = [];
```

Sur une boucle de 12x, je récupère le jour du 13 et vérifie si cela correspond à un vendredi (le chiffre 5). Si la condition est remplie, il push sur le tableau qui reprend les mois qui remplissent cette condition.

```js
for(m = 1; m < 12; m++) {
    let date = new Date(year,m,13);
    let day = date.getDay();
    
    if (day == 5){
        spooky.push(monthList[m])
    }
}
```

En bonus, j'affiche les résultat en créant un élément `p`, boucler les résultats sur son contenu et un `appendChild` pour l'insérer dans ma page HTML

```js
let section = document.getElementsByClassName("material")[0]
let p = document.createElement("p")
p.id = "target"

for (const i of spooky) {
    p.innerHTML += `${i} `
}
material.appendChild(p)
```