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
                this.setLocation(300, 300).playAnimation("stand");
                container.addChild(this);

            }
        }

        extend(CAAT.SpriteAction, CAAT.Actor);
        return CAAT.SpriteAction;
    });
