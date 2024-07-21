const express = require('express'); // importer la bibliothèque Express
const userRoute = require('./routes/user.js');
const productRoute = require('./routes/product.js');

const app = express(); // créer une instance d'Express
require('./config/connect.js'); // importer la configuration de connexion
app.use(express.json()); // parser les requêtes JSON

app.use('/product', productRoute); // définir la route pour les produits
app.use('/user', userRoute); // définir la route pour les utilisateurs


app.use('/getimage', express.static('./uploads')); 
// ...

app.listen(3000, () => { // lancer le serveur
  console.log('Server works');
});