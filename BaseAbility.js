define(function() {
    var BaseAbility = function(options, game) {
        var self = this;

        self.game = game;
        self.name = options.name;
        self.icon = options.icon;
    }

    BaseAbility.prototype.setOwner = function(man) {
        this.man = man;
    }

    BaseAbility.prototype.doAction = function() {
        if (this.name == 'power') {
            this.man.actor.spriteActor.playAnimation('kick');
        } else if (this.name == 'getSlingShot') {
            this.man.actor.spriteActor.playAnimation('pick');
        } else if (this.name == 'getComputer') {
            this.man.actor.spriteActor.playAnimation('pick');
        } else if (this.name == 'computerMinigame') {
//            self.game.scene.startMiniGame({
//                NUM: 0,
//                successCallback: function() {
//                    console.log('dsgdsgs');
//                },
//                failCallback: function() {
//                    console.log('fgfdgdg');
//                }
//            });
        }
    }

    return BaseAbility;
});