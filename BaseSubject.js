define(['baseAction',
    'GarbageSubject', 'BaseSubjectActor'], function(BaseAction, GarbageSubject, BaseSubjectActor){

    var BaseSubject = function(options, game) {
        var callbacks ={
            'garbage': GarbageSubject
        };

        var self = this;

        if (options.name in callbacks) {
            var data = callbacks[options.name];
            self.fail = data.fail;
            self.success = data.success;
        }

        self.game = game;
        self.name = options.name;
        self.icon = options.icon;
        self.respawn = options.respawn;
        self.point = options.point;

        self.actor = new BaseSubjectActor(this);
        self.canList = options.canList;
//        self.parseAction(options.action);
//        self.successCallback = options.successCallback;
//        self.failCallback = options.failCallback;
//        self.performEffect = function(ActionCaller) {
//            var callback = (self.isManCanUse(ActionCaller)) ? (self.successCallback) : (self.failCallback);
//
//            self.action.performAction(ActionCaller, self, {
//                callback: self.parseCallback(callback)
//            });
//        }
    }
    BaseSubject.prototype.destroySelf = function(context) {
        delete window[context];
    }

    BaseSubject.prototype.isManCanUse = function(man) {
        man = man || this.game.currentCharacter;
        if (this.canList.length == 0) {
            return false;
        }

        for (var index in this.canList) {
            if ((index in this.canList) && (this.canList[index] == man.activeAbility.name)) {
                return true;
            }
        }
        return false;
    }

    BaseSubject.prototype.doIt = function(ability) {
//        ability = ability || this.game.currentCharacter.activeAbility;
        var self = this;
        if (!self.isManCanUse()) {
            if (self.fail != undefined) {
                self.fail();
            }
            return false;
        } else {
            if (self.success != undefined) {
                self.success();
            }
            return true;
        }

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

    BaseSubject.prototype.register = function(container) {
        this.actor.register(container);
    }

    return BaseSubject;/*function(options) {
        return options['className'](options, this);
    };*/
})