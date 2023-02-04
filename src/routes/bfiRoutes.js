const fb = require('../controllers/v1/fizzBizz');

const routes = (app) => {
    app.route('/fizzbuzz')
        .get(fb.fizzBuzz);
    app.route('/fizzbuzzv2')
        .get(fb.fizzBuzzV2)
}

module.exports = routes;