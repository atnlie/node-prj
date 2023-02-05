const fb = require('../controllers/v1/fizzBizz');
const articles = require('../controllers/v1/atricleController');

const routes = (app) => {
    app.route('/fizzbuzz')
        .get(fb.fizzBuzz);
    app.route('/fizzbuzzv2')
        .get(fb.fizzBuzzV2);

    app.route('/getArticles')
        .get(articles.getAllArticles);

}

module.exports = routes;