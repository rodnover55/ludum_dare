define(
    ['caat'],
    function(CAAT) {
    CAAT.BaseManActor = function(baseMan) {
        CAAT.BaseManActor.superclass.constructor.call(this)
        this._baseMane = baseMan;
        this.setBounds(200, 100, 50, 150).
            setFrameTime(0, Number.MAX_VALUE)
        this.tick = 0;
        return this;
    };

    CAAT.BaseManActor.prototype = {
        paint: function(director, time) {
            var ctx= director.ctx;
            ctx.stokeStyle = 'black';
//            ctx.fillRect(0, 0, this.width, this.height);
            ++this.tick;
            ctx.fillText(this.tick, this.width / 2, this.height / 2);
        }
    }

    extend(CAAT.BaseManActor, CAAT.Actor);
    return CAAT.BaseManActor;
});
