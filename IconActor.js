define(
    ['caat'],
    function(CAAT) {
        CAAT.IconActor = function(baseMan) {
            CAAT.IconActor.superclass.constructor.call(this);
            this._baseMane = baseMan;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;
        };

//        CAAT.IconActor.prototype = {
//            paint: function(director, time) {
//                var ctx= director.ctx;
//                ctx.stokeStyle = 'black';
//                ctx.fillRect(0, 0, this.width, this.height);
//                ++this.tick;
//                ctx.fillText(this.tick, this.width / 2, this.height / 2);
//            }
//        }

        extend(CAAT.IconActor, CAAT.Actor);
        return CAAT.IconActor;
    });
