define(['stage'],
    function(stage) {
        var Stage = function(options) {
            var self = this;
            self.stage = options;
            self.path = new CAAT.Path();
            switch (self.stage) {
                case 1 :
                    self.path.beginPath(0,700).
                        fillStyle='#323232'.
                        addCubicTo( 0,550, 0,550, 0,550).
                        addCubicTo( 50,500, 70,510, 160,510).
                        addCubicTo( 210,500, 200,500, 260,550).
                        addCubicTo( 120,700, 120,700, 120,700).
                        addCubicTo( 0,700, 0,700, 0,700).
                        endPath();
                    break
            }

        };

        Stage.prototype.getPathActor = function(path) {
            var pathActor = new CAAT.PathActor().
            setBounds(0,0,1000,668).
                create().
                setPath(
                    path
                ).
                setInteractive(false);
            return pathActor;
        }
        return Stage;
    }
)