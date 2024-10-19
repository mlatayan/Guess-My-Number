# Guess My Number - Web & Mobile Game

**Guess My Number** est un jeu simple et addictif où les joueurs doivent deviner un nombre composé de 4 chiffres. Le but est de proposer un ensemble de 4 chiffres et d'obtenir des indices sur combien d'entre eux sont corrects, sans savoir lesquels. Une fois que les 4 chiffres corrects sont trouvés, le joueur doit encore découvrir leur ordre exact.

## Fonctionnalités
- Devine un nombre à 4 chiffres.
- Le jeu indique combien de chiffres sont corrects, sans préciser lesquels.
- Une fois les 4 bons chiffres trouvés, trouve leur ordre exact.
- Interface simple, accessible sur le web et mobile (via une application mobile).
- Prise en charge des appareils mobiles avec **React Native** et des navigateurs web avec **React.js**.

## Technologies Utilisées

### Front-end Web
- **React.js** : Framework JavaScript pour la création d'une interface utilisateur réactive et modulaire.
- **Tailwind CSS** (ou Bootstrap) : Pour un design simple et rapide.

### Mobile
- **React Native** : Développement mobile cross-platform (Android & iOS) pour offrir une expérience native.
- **Expo** : Outil de gestion de projet React Native pour simplifier le développement mobile et les tests.

### Back-end
- **Node.js** : Serveur back-end pour gérer la logique du jeu et les API.
- **Express.js** : Framework web minimaliste pour la gestion des routes et des requêtes HTTP.

### Déploiement
- **Web** : Utilisation de **Vercel** ou **Netlify** pour héberger l'application web.
- **Mobile** : Utilisation d'**Expo** pour tester et déployer l'application sur Android et iOS.

## Installation & Lancement
Cloner le projet :
    ```bash
    git clone https://github.com/ton-utilisateur/guess-my-number
    cd guess-my-number
    ```
### Back-end
1. Installer les dépendances :
    ```bash
    cd backend
    npm install
    ```
2. Lancer le serveur :
    ```bash
    node index.js
    ```
   Le serveur est maintenant disponible sur `http://localhost:3000`.

### Front-end Web
1. Installer les dépendances :
    ```bash
    cd frontend
    npm install
    ```
2. Lancer l'application :
    ```bash
    npm start
    ```
   L'application est accessible sur `http://localhost:3000`.

### Application Mobile
1. Installer Expo CLI :
    ```bash
    npm install -g expo-cli
    ```
3. Lancer l'application mobile :
    ```bash
    expo start
    ```
   Utilise l'application **Expo Go** pour scanner le QR code et tester sur ton appareil mobile.

## Contribuer

1. Forker le projet.
2. Créer une branche pour vos modifications (`git checkout -b feature/nouvelle-fonctionnalite`).
3. Committer vos modifications (`git commit -m 'Ajouter nouvelle fonctionnalité'`).
4. Pousser la branche (`git push origin feature/nouvelle-fonctionnalite`).
5. Ouvrir une Pull Request.

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.
