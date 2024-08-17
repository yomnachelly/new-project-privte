const express = require('express'); // Importer la bibliothèque Express
const cors = require('cors'); // Importer cors pour gérer les requêtes cross-origin

// Importer les routes utilisateur et produit
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/product.js');

const app = express(); // Créer une instance d'Express

require('./config/connect.js'); // Importer la configuration de connexion à la base de données

app.use(cors()); // Utiliser cors pour permettre les requêtes cross-origin
app.use(express.json()); // Middleware pour parser les requêtes JSON

// Définir les routes pour les produits et les utilisateurs
app.use('/product', productRoute); 
app.use('/user', userRoute);

// Servir des fichiers statiques depuis le répertoire 'uploads'
app.use('/getimage', express.static('./uploads')); 

// Lancer le serveur sur le port 3000
app.listen(3000, () => { 
  console.log('Server works');
});
