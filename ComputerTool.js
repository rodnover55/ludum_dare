define(['minigames/engineer/EngineerGame', 'caat'], function(EngineerGame, CAAT) {
    return {
        callbacks: {
            success: function(self, caller) {
                caller.man.addTool(self);
                caller.man.activeAbility = self.game.abilities.slingshooting;
                console.log(self, caller, 'success');
            },
            fail: function(self, caller) {
                console.log(self, caller, 'faile');
            }
        }
    }
})
