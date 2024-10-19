const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route basique pour tester
app.get('/', (req, res) => {
    res.send('Welcome to Guess My Number API');
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
