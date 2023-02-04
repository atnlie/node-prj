const express = require('express');
const profile = require('./profile');

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
   res.send('Hello World \n\n root -> /');
});

app.get('/info', (req, res) => {
    res.send('Selamat datang di info anda!');
});

app.get('/profile', profile.profile);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});