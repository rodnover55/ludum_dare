define(['Stage'],
    function(stage) {
        var Stage = function(options) {
            var self = this;
            self.stage = options;
            self.path = new CAAT.Path();
            switch (self.stage) {
                case 1 :
                    self.path.beginPath(0,300).
                        addCubicTo( 0,0, 100,200, 100,300).
                        addCubicTo( 50,80, 0,10, 100,50).
                        endPath();
                    break
            }

        };

        Stage.prototype.getPathActor = function(path) {
            var pathActor = new CAAT.PathActor().
                setBounds(100,0,600,668).
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