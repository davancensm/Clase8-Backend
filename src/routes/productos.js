const express = require('express');
const productManager = require('../managers/API')

const products = new productManager();

const router = express.Router();

router.get('/', products.getAll)

router.get('/:id', products.getById)

router.delete('/:id', products.deleteById)

router.post('/', products.save)

router.put('/:id', products.update)

module.exports = router;