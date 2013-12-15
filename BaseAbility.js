define(function() {
    var BaseAbility = function(options, game) {
        var self = this;

        self.game = game;
        self.name = options.name;
        self.icon = options.icon;
    }

    BaseAbility.prototype.setOwner = function(man) {
        this.man = man;
    }

    BaseAbility.prototype.doAction = function() {
        this.man.actor.spriteActor.playAnimation('kick');
    }

    return BaseAbility;
});