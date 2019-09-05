import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router)


//inicia o servidor
app.listen(port);
console.log('API funcionando!');

ReactDOM.render( < App / > , document.getElementById('root'));