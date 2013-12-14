define(['baseMan', 'baseTool', 'ability', 'baseSubject', 'baseAction', 'Stage'],
    function(BaseMan, BaseTool, Ability, BaseSubject, BaseAction, Stage) {

    var Game = function(options) {
        var self = this;
        var optionName;
        self.currentStageId = 1;

        for (optionName in options) {
            self[optionName] = self.parseOption(options, optionName);
        }
        var toolName;
        for (toolName in self.tools) {
            self.parseCanList(self.tools[toolName].canList, self.mans);
        }
    }

    Game.prototype.currentStage = function() {
        return this.stages[this.currentStageId - 1];
    }
    Game.prototype.parseOption = function(optionsList, optionName) {
        var parseObjList = {
            mans: BaseMan,
            tools: BaseTool,
            abilities: Ability,
            subjects: BaseSubject,
            actions: BaseAction,
            stages: Stage
        }
        var objects = {};
        var i;
        for (i in optionsList[optionName]) {
            objects[i] = new parseObjList[optionName](optionsList[optionName][i]);
        }
        return objects;
    }

    Game.prototype.parseCanList = function(canList, mans) {
        var i;
        for (i in canList) {
            if (canList[i] in mans) {
                canList[i] = mans[canList[i]];
            }
        }
    }

    Game.prototype.register = function(container, scene) {
        var height = 10;


        for (key in this.mans) {
            var man = this.mans[key];
            var opt = new Object();
            opt.height = height;
            opt.path = this.currentStage().path;
            height += man.register(container, scene, opt);
            height = opt.height;
        }

    }

    return Game;
})