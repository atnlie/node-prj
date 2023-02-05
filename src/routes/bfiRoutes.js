const fb = require('../controllers/v1/fizzBizz');
const articles = require('../controllers/v1/atricleController');
const solving = require('../controllers/v1/problemSolvingController');

const routes = (app) => {
    app.route('/fizzbuzz')
        .get(fb.fizzBuzz);
    app.route('/fizzbuzzv2')
        .get(fb.fizzBuzzV2);

    app.route('/getArticles')
        .get(articles.getAllArticles);

    app.route('/reversTwoString/:str1/:str2')
        .get(solving.reverseString);
}

module.exports = routes;