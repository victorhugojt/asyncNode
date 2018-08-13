const request = require('request');
request({
    url: 'https://reqres.in/api/users?page=2',
    json: true
}, (error, response, body) => {
    console.log(body);
});
//# sourceMappingURL=app.js.map