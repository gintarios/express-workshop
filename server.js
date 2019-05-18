var express = require('express');
var formidable = require('express-formidable');
var fs = require('fs');
var app = express();

app.use(express.static('public'));
app.use(formidable());

app.listen(3000, function() {
    console.log('Server is listening to port 3000. Ready to accept requests');
});

app.post('/create-post', (req, res) => {
    fs.readFile(__dirname + '/data/posts.json', function(error, file) {
        var parsedFile = JSON.parse(file.toString());
        parsedFile[Date.now()] = req.fields.blogpost;
        fs.writeFile(__dirname + '/data/posts.json', JSON.stringify(parsedFile), function(error) {
            res.sendFile(__dirname + '/data/posts.json')
        });
    });
});




