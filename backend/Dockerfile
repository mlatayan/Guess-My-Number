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

# Exposer le port 5000
EXPOSE 5000

# Commande pour démarrer le serveur backend
CMD ["npm", "start"]
