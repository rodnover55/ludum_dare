define(['ability'], function(Ability){
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






        self.addAbilities = function(abilities) {
            for (var i=0; i < self.abilities.length; i++) {
                var Ability = self.abilities[i];
                if (! (Ability.name in abilities))
                abilities[Ability.name] = Ability;
            }
            return abilities;
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
            if (this.canList[index].name == man.name) {
                return true;
            }
        }
        return false;
    }
    BaseTool.prototype.parseAbilities = function(abilities) {
        var i, list = {};
        for(i in abilities) {
            list[abilities[i].name] = new Ability(abilities[i]);
        }
        return list;
    }

    BaseTool.prototype.register = function(container) {
        this.actor.register(container);
    }

    return BaseTool;
});