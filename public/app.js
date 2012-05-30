YUI().use('app-base', 'model', 'node-style', function (Y) {

    Y.SquareView = Y.Base.create('squareView', Y.View, [], {
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

        views: {
            square: {
                type    : 'SquareView',
                preserve: true
            }
        },

        events: {
            form: {submit: 'onColorSubmit'}
        }
    });

    app.route('/', function () {
        this.showView(null);
    });

    app.route('/:color', function (req) {
        var square = this.get('square').setAttrs(req.params);

        this.showView('square', {
            container: '.square',
            square   : square
        });
    });

    app.onColorSubmit = function (e) {
        var color = Y.one('input').get('value');

        e.preventDefault();
        this.navigate(color);
    };

    app.render();

});
