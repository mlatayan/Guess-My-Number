FROM ubuntu:latest
LABEL authors="mlatayan"

ENTRYPOINT ["top", "-b"]

# Utilisation d'une image Node.js officielle
FROM node:18

# Répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port pour le front-end web
EXPOSE 19006  # Port par défaut pour Expo

# Commande pour démarrer l'application (expo start)
CMD ["npx", "expo", "start", "--tunnel"]
