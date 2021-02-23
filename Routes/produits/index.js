const express = require('express');
const {
  getProduits,
  addProduit,
  getSingleProduit,
  deleteProduit,
} = require('../../Controllers/produits');
const router = express.Router();

router.get('/', getProduits);
router.get('/:id', getSingleProduit);
router.post('/', addProduit);
router.delete('/:id', deleteProduit);

module.exports = router;
