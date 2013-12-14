define(['baseManActor', 'ability', 'baseTool', 'baseAction', 'IconActor', 'SpriteActor'],
    function(baseManActor, Ability, BaseTool, BaseAction, IconActor, SpriteActor) {

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

        self.iconActor = new IconActor(this);
        self.spriteActor = new SpriteActor(this);
    }

    BaseMan.prototype.parseActions = function(actions) {
        var i;
        var mansActions = {};
        for (i in actions) {
            mansActions[actions[i].name] = new BaseAction(actions[i]);
        }
        return mansActions;
    }

    BaseMan.prototype.register = function(viewport, container, scene, opt) {
        var self = this;
        self.iconActor.setLocation(10, opt.height);
        self.iconActor.setBackgroundImage('man-strong-icon');
        scene.addChild(self.iconActor);

        self.spriteActor.setLocation(300, 300);

        self.spriteActor.setBackgroundImage2('man-strong-sprite').playAnimation("move");

        container.addChild(self.spriteActor);
        opt.height += self.iconActor.height + 10;
    }

    return BaseMan;

})
