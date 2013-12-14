define(['baseMan', 'baseTool', 'ability', 'baseSubject', 'baseAction'], function(BaseMan, BaseTool, Ability, BaseSubject, BaseAction) {

    var Game = function(options) {
        var self = this;
        var optionName;

        for (optionName in options) {
            self[optionName] = self.parseOption(options, optionName);
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

    return Game;
})