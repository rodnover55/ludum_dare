define([], function(){
    var BaseTool = function(options) {
        var self = this;
        self.abilities = options.abilities;
        self.name = options.name;
        self.unique = (typeof options.unique == 'undefined') ? false : options.unique;
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

    return BaseTool;
})