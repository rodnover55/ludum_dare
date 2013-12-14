define(function() {
    var Ability = function(options) {
        var self = this;
        self.name = options.name;
        self.action = options.action;

        self.doAction = function() {
            self.action();
        }


    }

    return Ability;
})