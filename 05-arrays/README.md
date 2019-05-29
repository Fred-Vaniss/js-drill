# Série 5: les tableaux
Une série d'exercice reprenant toutes les méthodes pour lire et manipuler des tableaux

Je n'ai aucune particularité à expliquer si ce n'est que pour les Sets qui est nouveau pour moi.

La seule chose que je peux noter c'est que pour le dernier exercice, j'ai du transformer le set en tableau que je peux sélectionner un index aléatoire. Dans les sets on ne peut pas sélectionner d'index

```js
let items = Array.from(adjectives) //Transformer le set en array

let selAdj = items[Math.floor(Math.random()*11)]
```