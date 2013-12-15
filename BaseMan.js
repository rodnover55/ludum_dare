define(['baseManActor', 'ability', 'baseTool', 'baseAction'],
    function(BaseManActor, Ability, BaseTool, BaseAction) {

    var BaseMan = function(options, game) {
        var self = this;

        self.game = game;

        if (self.game.currentCharacter == null) {
            self.activate();
        }
        self.name = options.name;
        self.speed = options.speed;
        self.jump = options.jump;
        self.icon = options.icon;
        self.actions = self.parseActions(options.actions);
        self.actionSize = options.actionSize;
        self.actionFile = options.actionFile;

        self.respawn = options.respawn;

        self.abilities = [];
        if ((typeof options.abilities != 'undefined') && (options.abilities.length > 0)) {
            for (var key in options.abilities) {
                this.game.abilities[key].setOwner(self);
                self.abilities.push(this.game.abilities[key]);
            }
        }

        self.inventory = (typeof options.inventory == 'undefined') ? [] : options.inventory;
        self.activeAbility = (self.abilities.length > 0) ? (self.abilities[0]) : (null);

        self.performAction = function(actionName, Subject, options) {
            self.actions[actionName].performAction(self, Subject, options);
        }

        self.addTool = function(Tool) {
            var InvTool = Tool.clone();
            InvTool.addAbilities(self.abilities);
            if (Tool.isManCanUse(self)) {
                console.log(self.name, 'yeaaaah', Tool.canList);
            } else {
                console.log(self.name, 'nooooo', Tool.canList);
            }
            if (InvTool.unique) {
                self.inventory[InvTool.name] = InvTool;
            } else {
                if (typeof self.inventory[InvTool.name] == 'undefined') {
                    self.inventory[InvTool.name] = [];
                }
                self.inventory[InvTool.name].push(InvTool);
            }

        }

        self.removeTool = function(Tool) {
            if (self.inventory[Tool.name] instanceof BaseTool) {
                delete self.inventory[Tool.name];
            } else {
                self.inventory[Tool.name].pop();
            }

        }

        self.draw = function() {

        }

        self.actor = new BaseManActor(this);
    }

    BaseMan.prototype.parseActions = function(actions) {
        var key;
        var mansActions = {};
        for (key in actions) {
            mansActions[key] = new BaseAction(key, actions[key]);
        }
        return mansActions;
    }

    BaseMan.prototype.register = function(container, scene, opt) {
        var self = this;

        self.actor.register(scene, container, opt)

//        self.spriteActor.playAnimation("move")
//        container.addChild(self.spriteActor);

//        var path = new CAAT.Behavior.PathBehavior().
//                setPath(opt.path).
//                setFrameTime(0, 5000).
//            setAutoRotate(true, CAAT.Behavior.PathBehavior.autorotate.LEFT_TO_RIGHT);
//
//        self.spriteActor.addBehavior(path);
    }

    BaseMan.prototype.activate = function() {
        this.game.activate(this);
    }

    BaseMan.prototype.isActive = function() {
        return this.game.currentCharacter === this;
    }

    BaseMan.prototype.isLocated = function(x, y) {
        return this.actor.isLocated(x, y);
    }

    BaseMan.prototype.move = function(x, y) {
        this.actor.move(x, y);
    }

    return BaseMan;

})
