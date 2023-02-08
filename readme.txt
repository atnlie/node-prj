Get Articles

Type       Description
Name        /getArticles
Method      GET
Path        /v1/getArticles
Header      No header needed
Query Params    {
    'offset':  1, // optional min: 1, default: 1
    'limit': 10 // optional min:1, max: 100, default: 25
}
Success Response {
    'code': 2000,
    'message': 'success get articles',
    'data': [
        {
            'title': 'belajar mandiri',
            'description': 'belajar mandiri dimulai sejak dini',
            'author': 'atnlie'
        },
         {
            'title': 'belajar memanage uang',
            'description': 'finalsial direncanankan bukan diwariskan',
            'author': 'budi'
        }
    ]
}

Empty Response {
    'code': 2000,
    'message': 'success get articles',
    'data': []
}

Error Response {
    'code': 4000,
    'message': 'failed get articles',
    'data': null
}