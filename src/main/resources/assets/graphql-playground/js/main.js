window.addEventListener('load', function (event) {
    GraphQLPlayground.init(document.getElementById('root'), {
        settings: {
            'request.credentials': 'same-origin'
        }
    })
});
