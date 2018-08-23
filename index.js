
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

require('./startup/routes')(app);
require('./startup/db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    if (res.status(200)) res.send('welcome to our fucking awesome restful api');
});

const server = app.listen(3000, () => console.log('kuy at port 30000'));

module.exports = server;