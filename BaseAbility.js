define(function() {
    var BaseAbility = function(options, game) {
        var self = this;

        self.game = game;
        self.name = options.name;
        self.icon = options.icon;
    }
    return BaseAbility;
});