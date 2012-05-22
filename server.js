var express = require('express'),
    app     = express.createServer(),
    port    = process.env.PORT || 3000;

app.configure(function () {
    app.use(express.static(__dirname + '/public'));
});

app.get('/:color?', function (req, res) {
    if (req.query.color) {
        return res.redirect('/' + req.query.color, 302);
    }

    var color = req.params.color,
        content;

    content = '' +
        '<!DOCTYPE html>' +
        '<html>' +
        '<head>' +
            '<meta charset="uft-8" />' +
            '<title>Square Thing</title>' +
            '<link rel="stylesheet" href="style.css" />' +
        '</head>' +
        '<body>' +
            '<p><a href="blue">Blue</a> <a href="green">Green</a></p>' +
            '<form action="/" method="GET">' +
                '<input type="text" placeholder="Color" name="color" /> ' +
                '<button type="submit">Set Color</button>' +
            '</form>' +

            (color ? '<div class="square" style="background-color: ' + color + ';"></div>' : '') +

            '<script src="http://yui.yahooapis.com/3.5.1/build/yui/yui-min.js"></script>' +
            '<script src="app.js"></script>'
        '</body>' +
        '</html>';

    res.send(content);
});

app.listen(port, function () {
    console.log('Listening on ' + port);
});
