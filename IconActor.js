define(
    ['caat'],
    function(CAAT) {
        CAAT.IconActor = function(baseMan) {
            CAAT.IconActor.superclass.constructor.call(this);
            this.man = baseMan;
            this.setFrameTime(0, Number.MAX_VALUE);
            return this;
        };


        CAAT.IconActor.prototype = {
            register: function(container, opt) {
                var self = this;
                self.setLocation(10, opt.height);
                self.setBackgroundImage(this.man.icon);
                container.addChild(self);
                opt.height += self.height + 10;
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
            paint : function(director, time) {
                CAAT.IconActor.superclass.paint.call(this, director, time);

                if (this.man.isActive()) {
                    var ctx = director.ctx;
                    ctx.strokeStyle = '#aaa';
                    ctx.strokeRect(0, 0, this.width, this.height);
                }
            }
        }
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
