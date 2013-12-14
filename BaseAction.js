define(function() {
    var BaseAction = function(options) {

        var self = this;
        self.subject = options.subject;
        self.beforeCallback = (typeof options.before == 'undefined') ? function() {} : options.before;
        self.afterCallback = (typeof options.after == 'undefined') ? function() {} : options.after;
        self.performAction = function(callback, Environment, options) {
            self.beforeCallback(Environment, options);
            callback(Environment, options);
            self.afterCallback(Environment, options);

        }

    }

    return BaseAction;
})