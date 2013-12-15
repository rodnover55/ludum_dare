define(
    ['caat'],
    function(CAAT) {
        CAAT.SpriteAction = function(baseMan) {
            CAAT.SpriteAction.superclass.constructor.call(this);
            this._baseMane = baseMan;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;
        };

        CAAT.SpriteAction.prototype = {
            setBackgroundImage2: function(image, resize) {
            var si = new CAAT.Foundation.SpriteImage().initialize(image, 4, 6).
                addAnimation("stand", [12, 13, 14], 300).
                addAnimation("move", [6, 7, 8, 9, 10, 11], 100);
                CAAT.SpriteAction.superclass.setBackgroundImage.call(this, si, resize).setBackgroundImage(si);

                return this;
            },
            register: function(container) {
                this.setBackgroundImage2('man-strong-sprite');
                this.setLocation(this._baseMane.respawn[0], this._baseMane.respawn[1]).playAnimation("stand");
                container.addChild(this);

            },
            mouseClick: function(mouseEvent) {
                this._baseMane.activate();
            },
            mouseEnter: function(mouseEvent) {
                document.body.style.cursor = 'pointer';
            },
            mouseExit: function(mouseEvent) {
                document.body.style.cursor = 'default';
            },
            isLocated: function(x, y) {
                return (this.x == x) && (this.y == y);
            },
            move: function(x, y) {
                var self = this;
                var path = new CAAT.Path();
                path.beginPath(this.x, this.y);
                path.addLineTo(x, y, 'black');
                path.endPath();

                if (this.x > x) {
                    var cb = new CAAT.ScaleBehavior().
                        setFrameTime(0, 500).
                        setValues(-1, -1, 1, 1, 0.6, 0);
                    this.addBehavior(cb);
                }

                var pb = new CAAT.PathBehavior().
                    setFrameTime(200, 2000).
                    setPath(path);

                pb.addListener({behaviorExpired: function(behavior, time, actor){
                    {self.playAnimation("stand")}
                }});
                this.playAnimation("move").addBehavior(pb);
            }

    }

        extend(CAAT.SpriteAction, CAAT.Actor);
        return CAAT.SpriteAction;
    });
