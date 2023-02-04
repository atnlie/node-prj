const fizzBizz = require('../controllers/v1/fizzBizz');

const routes = (app) => {
    app.route('/fizzbizz')
        .get(fizzBizz);
}

module.exports = routes;