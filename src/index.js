const express = require('express');
const {UserController} = require('./db/controllers');
const PORT = process.env.NODE_PORT || 3000;

const app = express();
app.use(express.json());

app.post('/user', UserController.createUser);
app.patch('/user/:idd',UserController.updateUser);
app.get('/user/:id',UserController.getUser);
app.delete('/user/:id',UserController.deleteUser);