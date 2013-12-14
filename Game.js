define(['baseMan', 'baseTool', 'ability', 'baseSubject', 'baseAction'],
    function(BaseMan, BaseTool, Ability, BaseSubject, BaseAction) {

    var Game = function(options) {
        var self = this;
        var optionName;

        for (optionName in options) {
            self[optionName] = self.parseOption(options, optionName);
        }
        var toolName;
        for (toolName in self.tools) {
            self.parseCanList(self.tools[toolName].canList, self.mans);
        }
    }

    Game.prototype.parseOption = function(optionsList, optionName) {
        var parseObjList = {
            mans: BaseMan,
            tools: BaseTool,
            abilities: Ability,
            subjects: BaseSubject,
            actions: BaseAction
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

    Game.prototype.register = function(viewport, container, scene) {
        var height = 10;
        for (key in this.mans) {
            var man = this.mans[key];
            var opt = new Object();
            opt.height = height;
            height += man.register(viewport, container, scene, opt);
            height = opt.height;
        }

    }

    return Game;
})