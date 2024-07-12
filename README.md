# Projet 7 Kasa - OpenClassrooms
![](https://user.oc-static.com/upload/2022/06/24/16560899769906_FR_811_P8_Banner-Kasa%20%281%29.png)

## Sommaire
1. Préanbule
2. Installation
3. Fonctionnalités
    * Affichage des loggements
    * Détails d'un logement
    * Système de Gallery
    * Système de Collapse
    * Système de notation
4. Technos utilisés
5. Difficultés rencontré
6. Conclusion

## Préambule
Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

L'agence, **Kasa**, souhaitant moderniser son application web, m'a recruté en tant que *freelance* pour refaire intégralement l'application web avec une **techno** plus récente.

## Instalation
**Prérequis :**

* Node.js 20+
* npm ou yarn


**Instruction :**

```shell
cd path/to/directory
git clone git@githubcom:developor45ju/P7_creez_une_application_web_de_location_immobiliere_avec_React.git
npm install
npm start
```

## Fonctionnalités
### Affichage des logements
La page d'accueil affiche une liste de logements sous forme de cartes. Chaque carte présente :
* Une image du logement
* Le titre du logement
### Détails d'un logement
La page de détail d'un logement présente les informations suivantes :
* Un carroussel (Gallery)
* Le titre du logement
* Le nom et la photo de l'hôte
* La localisation
* Les tags associés à ce logement
* Le note moyenne du logement
* Deux sections extensibles (Collapse) :
    * Description du logement
    * Equipement du logement
### Système de Gallery
Le carrousel d'images permet de visualiser les photos du logement :
* Flèches de navigation (gauche/droite)
* Affichage du numéro de l'image actuelle
### Système de Collapse
Les sections extensibles (Collapse) permettent d'afficher/masquer du contenu :
* Un titre cliquable avec une flèche
* Un paragraphe pour le *Collapse* description et une liste puce pour le *collapse* équipement

## Technos utilisés
### Front-end
- React 18.2.0
- React Router 6.22.3
- SASS 1.72.0
- Autoprefixer 10.4.19
- Font Awesome 6.5.1
### Outils
- Figma
- Visual Studio Code
- Git et GitHub

## Difficultés rencontrés
- Mise en place du composant *Gallery*
- Implémentation du responsive

## Conclusion 
C'était un projet qui me faisait manipuler un Framework **JS** où je peux réutiliser des bouts de code, par exemple : le système de Gallery; le système de Collapse