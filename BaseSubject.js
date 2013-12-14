define(function(){
    var BaseSubject = function(options) {
        var self = this;
        self.name = options.name;
        self.icon = options.icon;
        self.canList = options.canList;

        self.action = options.action;
    }
    return BaseSubject;
})