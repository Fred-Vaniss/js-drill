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

