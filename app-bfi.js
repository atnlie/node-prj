const express = require('express');
const route = require('./src/routes/bfiRoutes');

const app = express();
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

route(app);

// Sever configuration
app.listen(port, hostname, () => {
    console.log('Server running at: http://' + hostname + ':' + port);
});