define(['baseManActor', 'ability', 'baseTool', 'baseAction'], function(baseManActor, Ability, BaseTool, BaseAction) {

    var BaseMan = function(options) {
        var self = this;
        self.name = options.name;
        self.speed = options.speed;
        self.jump = options.jump;
        self.icon = options.icon;
        self.actions = self.parseActions(options.actions);
        self.abilities = (typeof options.abilities == 'undefined') ?  {} : options.abilities;
        self.inventory = (typeof options.inventory == 'undefined') ? {} : options.inventory;

        self.performAction = function(actionName, Environment) {
            self.actions[actionName].performAction(Environment, options);
        }

        self.addTool = function(Tool) {
            var InvTool = Tool.clone();
            InvTool.addAbilities(self.abilities);
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

    }

    BaseMan.prototype.parseActions = function(actions) {
        var i;
        var mansActions = {};
        for (i in actions) {
            mansActions[actions[i].name] = new BaseAction(actions[i]);
        }
        return mansActions;
    }

    return BaseMan;

})
