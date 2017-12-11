const loremIpsum = require("../generator.js");
const querystring = require("querystring");
const fs = require("fs");

const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
var fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
response.write(fileContents);
response.end();
});

router.post('/', (request, response) => {
    request.on("data", function(inputValue) {
    var query = inputValue.toString();
    var numberOfParagraphs = querystring.parse(query).numberOfParagraphs;
    var loremIpsumText = loremIpsum.getAllParagraphs(numberOfParagraphs);
    var fileContents = fs.readFileSync("./public/index.html", {encoding: "utf8"});
    fileContents = fileContents.replace("<div class='placeholder-div'></div>",loremIpsumText);;
    response.setHeader('Content-Type', 'text/html');
    response.write(fileContents);
    response.end();
});
});

module.exports = router;