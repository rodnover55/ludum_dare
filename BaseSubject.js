define(['baseAction'], function(BaseAction){
    var BaseSubject = function(options) {
        var self = this;
        self.name = options.name;
        self.icon = options.icon;
        self.canList = options.canList;
        self.parseAction(options.action);
        self.successCallback = options.successCallback;
        self.failCallback = options.failCallback;
        self.performEffect = function(ActionCaller) {
            var callback = self.failCallback;
            if (self.isManCanUse(ActionCaller)) {
                callback = self.successCallback;
            }
            self.action.performAction(ActionCaller, self, {
                callback: self.parseCallback(callback)
            });
    }
    }
    BaseSubject.prototype.destroySelf = function(context) {
        delete window[context];
    }

    BaseSubject.prototype.isManCanUse = function(man) {
        for (index in this.canList) {
            if (this.canList[index] == man.name) {
                return true;
            }
        }
        return false;
    }

    BaseSubject.prototype.parseCallback = function(callback) {
        var onCall = callback.oncall.split('.');
        var contextesParse = {

        }
        var context = onCall[0];
        var action = onCall[1];
        var $this = this;
        if (context == 'self') {
            return function(ActionCaller, Subject, options) {
                $this.destroySelf(this);
            }
        } else {
            return function(ActionCaller, Subject, options) {
                ActionCaller.performAction(action, ActionCaller, {
                    callback: function(ActionCaller, ActionCaller) {

                    } });
            };
        }

    }

    BaseSubject.prototype.parseAction = function(action) {
        this.action = new BaseAction(action);
    }

    return BaseSubject;
})