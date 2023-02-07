const express = require('express');
const bodyParser = require('body-parser');
const route = require('./src/routes/bfiRoutes');

const app = express();
module.exports = app;

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

route(app);

const errorHandler = (err, req, res, next) => {
    res.status(500)
    res.render('error', { error: err })
}

app.use(errorHandler);


// route not found
app.use((req, res) => {
    res.status(404);
    res.send('<h1>Page not found</h1>');
})

// Sever configuration
app.listen(port, hostname, () => {
    console.log('Server running at: http://' + hostname + ':' + port);
});
