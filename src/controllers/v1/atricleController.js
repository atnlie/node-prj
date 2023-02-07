const axios = require('axios');

const customResult = (data) => {
    if (data.length < 1) {
        return {};
    }

    for (let i = 0; i < data.length; i++) {
        console.log('Data -> ' + data[i]?.title);
        console.log('Data -> ' + data[i]?.['story_title']);
    }
    return data;
}

const getAllArticles = (req, res) => {
    const author = req.query.author || '';
    const page = req.query.page || 1;
    console.log('Values are author ' + author + ' and page is ' + page);
    let apiUrl = 'https://jsonmock.hackerrank.com/api/articles';

    if (author !== '') {
        apiUrl = `https://jsonmock.hackerrank.com/api/articles?author=${author}&page=${page}`;
        // apiUrl = `https://jsonmock.hackerrank.com/api/articles?page=${page}`;
    }

    console.log('apiUrl ' + apiUrl);

    axios({
        method: 'get',
        url: apiUrl,
    })
        .then((response) => {
            // console.log('Success ' + JSON.stringify(response.data));
            console.log('Success!');
            // res.json(response.data);
            // if (author === '') {
                res.json(response.data);
            // }

            // getByAuthor
            // const result = customResult(response?.data?.data || {});
            // res.json(result);
        })
        .catch((err) => {
            console.log('Error ' + err);
            res.send(err);
        });
}


module.exports = {getAllArticles}
;