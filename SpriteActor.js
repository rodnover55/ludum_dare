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
            var si = new CAAT.Foundation.SpriteImage().initialize(image, 1, 6).
                addAnimation("move", [0, 1, 2, 3, 4, 5], 100);
                CAAT.SpriteAction.superclass.setBackgroundImage.call(this, si, resize).setBackgroundImage(si);

                return this;
            }
        }

        extend(CAAT.SpriteAction, CAAT.Actor);
        return CAAT.SpriteAction;
    });
