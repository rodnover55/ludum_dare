define(['baseManActor', 'ability', 'baseTool', 'baseAction'],
    function(BaseManActor, Ability, BaseTool, BaseAction) {

    var BaseMan = function(options) {
        var self = this;
        self.name = options.name;
        self.speed = options.speed;
        self.jump = options.jump;
        self.icon = options.icon;
        self.actions = self.parseActions(options.actions);
        self.abilities = (typeof options.abilities == 'undefined') ?  {} : options.abilities;
        self.inventory = (typeof options.inventory == 'undefined') ? {} : options.inventory;

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
        var i;
        var mansActions = {};
        for (i in actions) {
            mansActions[actions[i].name] = new BaseAction(actions[i]);
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

    return BaseMan;

})
