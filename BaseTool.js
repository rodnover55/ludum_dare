define(['ability', 'BaseToolActor'], function(Ability, BaseToolActor){
    var BaseTool = function(options, game) {
        var self = this;
        self.abilities = self.parseAbilities(options.abilities);
        self.name = options.name;
        self.unique = (typeof options.unique == 'undefined') ? false : options.unique;
        self.canList = options.canList;
        self.game = game;
        self.icon = options.icon;
        self.big = (typeof options.big == 'undefined') ? false : options.big;
        self.actor = null;
        self.callbacks = options.callbacks;
        self.respawn = options.respawn;
        self.point = options.point;

        self.actor = new BaseToolActor(self);
        //TODO: захуюяр актора

        self.clone = function() {
            return new BaseTool(
                {
                    abilities: self.abilities,
                    name : self.name,
                    unique : self.unique,
                    big : self.big
                }
            );
        }

        self.removeAbilities = function(abilities) {
            for (var i=0; i < self.abilities.length; i++) {
                var Ability = self.abilities[i];
                if (!(Ability.name in abilities)) {
                    delete  abilities[Ability.name];
                }
            }
        }


    }

    BaseTool.prototype.addAbilities = function(man) {
        var self = this;
        for (var i in self.abilities) {
            var abilityName = self.abilities[i];
            man.abilities.push(man.game.abilities[abilityName]);
        }
    }

    BaseTool.prototype.doIt = function(ability) {
        var self = this;
        if (self.isManCanUseAbility(ability.man)) {
            self.callbacks.success(self, ability);
        } else {
            self.callbacks.fail(self, ability);
        }
    }

    BaseTool.prototype.isManCanUseAbility = function(man) {
        var self = this;
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

    BaseTool.prototype.isManCanUse = function(man) {
        for (var index in this.canList) {
            if (this.canList[index] == man.name) {
                return true;
            }
        }
        return false;
    }
    BaseTool.prototype.parseAbilities = function(abilities) {
        var i, list = {};
        for(i in abilities) {
            list[i] = abilities[i];
        }
        return list;
    }

    BaseTool.prototype.register = function(container) {
        this.actor.register(container);
    }

    return BaseTool;
});