define(['baseAction',
    'GarbageSubject', 'CrashedGarbageSubject', 'BaseSubjectActor', 'SpaceShipSubject', 'BrokenSpaceShipSubject'],
    function(BaseAction, GarbageSubject, CrashedGarbageSubject, BaseSubjectActor, SpaceShipSubject, BrokenSpaceShipSubject){

    var callbacks = {
        'garbage': GarbageSubject,
        'crashedGarbage': CrashedGarbageSubject,
        'spaceShip': SpaceShipSubject,
        'spaceShipBrokenWindow': BrokenSpaceShipSubject
    };

    var BaseSubject = function(options, game) {

        var self = this;

        if (options.name in callbacks) {
            var data = callbacks[options.name];
            self.fail = data.fail;
            self.success = data.success;
            self.data = data;
        }

        self.game = game;
        self.name = options.name;
        self.icon = options.icon;
        self.respawn = options.respawn;
        self.point = options.point;
        self.state = 'active';
        self.show = (options.show == undefined) || options.show;
        self.options = options;

        self.actor = new BaseSubjectActor(this);
        self.canList = options.canList;
        self.oncomplete = options.oncomplete;
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
        return this;
    }
    BaseSubject.prototype.convertTo = function(subject_name) {
        if (subject_name == undefined) {
            return;
        }

        var self = this;

        self.container.removeChild(self.actor);
        var options = self.game.subjects[subject_name].options;
        for (var i in options) {
            self[i] = options[i];
        }

        var self = this;

        if (options.name in callbacks) {
            var data = callbacks[options.name];
            self.fail = data.fail;
            self.success = data.success;
            self.data = data;
            data.init(self, self.container);
        }

        self.register(self.container);

    }

    BaseSubject.prototype.isManCanUse = function(man) {
        man = man || this.game.currentCharacter;
        if ((this.canList == undefined) || (this.canList.length == 0) || (man.activeAbility == null)) {
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
        ability = ability || this.game.currentCharacter.activeAbility;
        var self = this;
        if (!self.isManCanUse(ability.man) || self.state != 'active') {
            if (self.fail != undefined) {
                self.fail(self, ability);
            }
            return false;
        } else {
            if (self.success != undefined) {
                self.success(self, ability);
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
        this.container = container;
        this.actor.register(container);
    }

    return BaseSubject;
})