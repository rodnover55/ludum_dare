define(function() {
    var BaseAction = function(name, options) {

        var self = this;
        self.sprites = options.sprites;
        self.time = options.time;
        self.name = name;
        self.beforeCallback = (typeof options.before == 'undefined') ? function() {} : options.before;
        self.afterCallback = (typeof options.after == 'undefined') ? function() {} : options.after;

        self.performAction = function(ActionCaller, Subject, options) {
            self.beforeCallback(Subject, options);
            options.callback(ActionCaller, Subject, options);
            self.afterCallback(Subject, options);
        }

    }

    return BaseAction;
})