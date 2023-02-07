const mochaAxios = require('mocha-axios');
const appBfi = require('../../../app-bfi');

describe('API V1 Testing', () => {
    // const assert = require('assert');
    describe('Article Controller', () => {
        it('Should call getAllArticles and return success', mochaAxios({
                app: appBfi,
                req: {
                    params: {
                        author: 'WisNorCan',
                        page: 1
                    },
                    method: 'GET',
                    url: '/getArticles',
                    data: {},
                },
                res: {
                    status: 200,
                    data:
                        {
                            'total_pages': 1,
                            'total': 2,
                            'per_page': 10,
                            'page': 1
                        }
                }
            })
        );
    });
})