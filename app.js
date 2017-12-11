const express = require('express');
const app = express();

const routes = require('./routers/router');

app.use(express.static('public'));

app.use(routes);

app.listen(3000, function(){
    console.log('listening for requests on port 3000');
});