const product = require('../routes/products');

const express = require('express');
const app = express();

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/product', product);
}

