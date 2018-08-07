const request = require('request');
request({
    url: 'http://maps.googleapis.com/maps/api/geocode/json?address=55001%20loma%20de%20los%20bernal',
    json: true
}, (error, response, body) => {
    console.log(body);
});
//# sourceMappingURL=app.js.map