const express = require('express');
const {
  getAchats,
  addAchat,
  deleteAchat,
  getSingleAchat,
} = require('../../Controllers/achats');
const router = express.Router();

router.get('/', getAchats);
router.get('/:id', getSingleAchat);
router.post('/', addAchat);
router.delete('/:id', deleteAchat);

module.exports = router;
