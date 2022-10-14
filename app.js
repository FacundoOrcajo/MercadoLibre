const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, 'views', 'register.html')));

app.listen(port, () => console.log('servidor corriendo en http://localhost:' + port));