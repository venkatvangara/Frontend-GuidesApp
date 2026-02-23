# Travel Guide App — Frontend (Angular)

 Installation & Lancement

1. Cloner le dépôt :
   git clone https://github.com/venkatvangara/Frontend-GuidesApp

2. Installer les dépendances :
   npm install

3. Lancer l'application :
   ng serve

4. Ouvrir dans le navigateur :
   http://localhost:4200

---

 Fonctionnalités

- Liste des guides
- Détails d’un guide
- Liste des activités
- Ajout / édition / suppression des guides




Vidéo Démo
https://drive.google.com/file/d/1lofqmt-qvac9HbunLIIJheOccP-axwr7/view

Pour réaliser ce projet, j’ai suivi une approche simple et structurée :

1. Analyse du besoin
Afficher une liste de guides

Afficher les détails d’un guide

Gérer des activités (CRUD)

Assurer la communication entre Angular et Spring Boot

Utiliser une base MySQL pour stocker les données

2. Architecture
J’ai séparé le projet en deux parties pour plus de clarté :

Frontend Angular : interface utilisateur, navigation, formulaires

Backend Spring Boot : API REST, logique métier, accès à la base de données

3. Choix techniques
Angular pour une interface moderne et réactive

Spring Boot pour une API REST simple et rapide à mettre en place

MySQL pour une base relationnelle stable

Routing basé sur l’ID pour garantir la stabilité et la simplicité

Services Angular pour centraliser les appels API

Modèles TypeScript pour structurer les données

4. Déroulement du travail
Mise en place du backend (entités, contrôleurs, services)

Création des endpoints REST

Création du frontend (composants, routes, services)

Intégration backend ↔ frontend

Tests manuels (ajout, édition, suppression d’activités)

Nettoyage du code et préparation du rendu

Ajout d’une vidéo de démonstration

5. Difficultés rencontrées
Gestion du routing dynamique

Synchronisation entre les IDs du guide et les activités

Nettoyage du code pour la livraison finale

6. Résultat
Le projet est fonctionnel :

Liste des guides

Détails d’un guide

CRUD des activités

Navigation fluide

Backend et frontend connectés

Une vidéo de démonstration est fournie pour visualiser le fonctionnement.
