define(function() {
    var BaseAction = function(options) {

        var self = this;
        self.sprite = options.sprite;
        self.name = options.name;
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