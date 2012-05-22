YUI().use('app-base', 'model', 'node-style', function (Y) {

    Y.SquareView = Y.Base.create('sqaureView', Y.View, [], {
        containerTemplate: '<div class="square" />',

        initializer: function () {
            this.get('square').after('change', this.render, this);
        },

        render: function () {
            var color = this.get('square').get('color');
            this.get('container').setStyle('backgroundColor', color);
            return this;
        }
    });

    var app = new Y.App({
        square       : new Y.Model(),
        serverRouting: true,

        routes: [
            {path: '/',       callback: 'handleRoot'},
            {path: '/:color', callback: 'handleColor'}
        ],

        views: {
            noSquare: {
                type    : 'View',
                preserve: true
            },

            square: {
                type    : 'SquareView',
                preserve: true
            }
        },

        events: {
            form: {submit: 'onColorSubmit'}
        }
    });

    app.handleRoot = function () {
        this.showView('noSquare');
    };

    app.handleColor = function (req) {
        var square = this.get('square').setAttrs(req.params);

        this.showView('square', {
            container: '.square',
            square   : square
        });
    };

    app.onColorSubmit = function (e) {
        e.preventDefault();
        this.navigate(Y.one('input').get('value'));
    };

    app.render();

});
