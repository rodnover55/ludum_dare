define(
    ['caat'],
    function(CAAT) {
        CAAT.SpriteAction = function(baseMan) {
            CAAT.SpriteAction.superclass.constructor.call(this);
            this.man = baseMan;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;
        };

        CAAT.SpriteAction.prototype = {
            setBackgroundImage2: function(image, resize) {
                var sizes = this.man.actionSize;
                var actions = this.man.actions;
                var self = this;
                var si = new CAAT.Foundation.SpriteImage().initialize(image, sizes[0], sizes[1]);

                for (var key in actions) {
                    var action = actions[key];

                    var reset = action.reset || false;
                    if (reset) {
                        si.addAnimation(action.name, action.sprites, action.time, function(spriteImage, time) {
                            spriteImage.playAnimation('stand');
                        })
                    } else {
                        si.addAnimation(action.name, action.sprites, action.time)
                    }

                }
                CAAT.SpriteAction.superclass.setBackgroundImage.call(this, si, resize).setBackgroundImage(si);

                return this;
            },
            register: function(container) {
                this.setBackgroundImage2(this.man.actionFile);
                this.setLocation(this.man.respawn[0], this.man.respawn[1]).playAnimation("stand");
                container.addChild(this);

            },
            mouseClick: function(mouseEvent) {
                this.man.activate();
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

                self.emptyBehaviorList();
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
                    {actor.playAnimation("stand")}
                }});
                this.playAnimation("move").addBehavior(pb);
            }

    }

        extend(CAAT.SpriteAction, CAAT.Actor);
        return CAAT.SpriteAction;
    });
