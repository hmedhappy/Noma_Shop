const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

const achat_routes = require('./Routes/achats');
const user_routes = require('./Routes/users');
const produit_routes = require('./Routes/produits');

app.use('/achats', achat_routes);
app.use('/users', user_routes);
app.use('/produits', produit_routes);

app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
