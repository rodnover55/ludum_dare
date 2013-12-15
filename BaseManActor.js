define(
    ['caat', 'IconActor', 'SpriteActor'],
    function(CAAT, IconActor, SpriteActor) {
    CAAT.BaseManActor = function(baseMan) {
        CAAT.BaseManActor.superclass.constructor.call(this)
        this._baseMane = baseMan;
        this.setBounds(200, 100, 50, 150).
            setFrameTime(0, Number.MAX_VALUE)
        this.tick = 0;
        this.iconActor = new IconActor(this._baseMane);
        this.spriteActor = new SpriteActor(this._baseMane);


        return this;
    };

    CAAT.BaseManActor.prototype = {
        paint: function(director, time) {
            var ctx= director.ctx;
            ctx.stokeStyle = 'black';
//            ctx.fillRect(0, 0, this.width, this.height);
            ++this.tick;
            ctx.fillText(this.tick, this.width / 2, this.height / 2);
        },
        register: function(scene, container, opt) {
            this.iconActor.register(scene, opt);
            this.spriteActor.register(container)
        },
        move: function(x, y) {
            this.spriteActor.move(x, y);
        },
        isLocated: function(x, y) {
            return this.spriteActor.isLocated(x, y);
        }
    }

    extend(CAAT.BaseManActor, CAAT.Actor);
    return CAAT.BaseManActor;
});
