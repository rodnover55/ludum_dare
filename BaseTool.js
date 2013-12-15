define(['ability'], function(Ability){
    var BaseTool = function(options) {
        var self = this;
        self.abilities = self.parseAbilities(options.abilities);
        self.name = options.name;
        self.unique = (typeof options.unique == 'undefined') ? false : options.unique;
        self.canList = options.canList;
        self.icon = options.icon;
        self.big = (typeof options.big == 'undefined') ? false : options.big;

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

    return BaseTool;
});