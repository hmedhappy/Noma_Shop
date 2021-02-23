const express = require('express');
const {
  getUsers,
  addUser,
  deleteUser,
  getSingleUser,
} = require('../../Controllers/users');
const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getSingleUser);
router.post('/', addUser);
router.delete('/:id', deleteUser);

module.exports = router;
