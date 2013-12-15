define(['baseMan', 'baseTool', 'ability', 'BaseSubject', 'baseAction', 'Stage', 'BaseAbility'],
    function(BaseMan, BaseTool, Ability, BaseSubject, BaseAction, Stage, BaseAbility) {

    var Game = function(options) {
        var self = this;
        var optionName;
        self.currentStageId = 1;

        self.currentCharacter = null;

        self.abilities = self.get_abilities(options.abilities);
        var autoParseOpts = ['mans', 'tools', 'actions', 'stages'];
        for (var key in autoParseOpts) {
            optionName = autoParseOpts[key];
            self[optionName] = self.parseOption(options, optionName);
        }

        self.subjects = self.get_subjects(options.subjects);
        var toolName;
        for (toolName in self.tools) {
            self.parseCanList(self.tools[toolName].canList, self.mans);
        }
    }

    Game.prototype.get_abilities = function(options) {
        var abilities = [];

        for (var key in options) {
            abilities.push(new BaseAbility(options[key], this));
        }

        return abilities;
    }

    Game.prototype.get_subjects = function(options) {
        var subjects = [];
        for (var key in options) {
            subjects.push(new BaseSubject(options[key], this));
        }

        return subjects;

    }

    Game.prototype.currentStage = function() {
        return this.stages[this.currentStageId - 1];
    }

    Game.prototype.parseOption = function(optionsList, optionName) {
        var parseObjList = {
            mans: BaseMan,
            tools: BaseTool,
            abilities: Ability,
//            subjects: BaseSubject,
            actions: BaseAction,
            stages: Stage
        }
        var objects = {};
        var i;
        for (i in optionsList[optionName]) {
            objects[i] = new parseObjList[optionName](optionsList[optionName][i], this);
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

        for (key in this.subjects) {
            var subject = this.subjects[key];
            subject.register(container);
        }

        for (var key in this.mans) {
            var man = this.mans[key];
            var opt = new Object();
            opt.height = height;
            opt.path = this.currentStage().path;
            height += man.register(container, scene, opt);
            height = opt.height;
        }


    }

    Game.prototype.activate = function(baseMan) {
        this.currentCharacter = baseMan;
    }

    return Game;
})