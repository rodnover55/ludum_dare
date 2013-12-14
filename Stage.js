define(['caat'],
    function(CAAT) {
        var Stage = function(options) {
            var self = this;
            self.path = new CAAT.Path();



            self.path.beginPath(options[0][0], options[0][1]);
            for (var i = 1; i < options.length; i++) {
                self.path.addLineTo(options[i][0], options[i][1], 'black');
            }
            self.path.endPath();
        };

        return Stage;
    }
)