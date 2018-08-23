const express = require('express');
const router = express.Router();
const pool = require('../startup/db');

router.get('/', (req, res) => {
    // if (res.status(200)) res.send('you have list of product');
    pool.getConnection((err, connection) => {
        if (err) throw err;
        
       
        const queyString = 'SELECT * FROM product'; 

        connection.query(queyString, (errors, result) => {
            connection.release();
            if (res.status(200)) res.send(result);
            console.log(JSON.stringify(result));

            

        });
    }); 
});

router.post('/', (req, res) => {
    // res.send('post request is success!');
    pool.getConnection((err, connection) => {
        if (err) throw err;
        
        const product = {
            name: req.body.name
        }
        const queyString = 'INSERT INTO product SET ?'; 

        connection.query(queyString, [product] , (errors, result) => {
            connection.release();
            if (res.status(200)) res.send(result);

        });
    });
});

router.delete('/', (req, res) => {
    res.send('post request is success!');
});

module.exports = router;