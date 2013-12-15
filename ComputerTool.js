define(['caat'], function(CAAT) {
    return {
        callbacks: {
            success: function(self, caller) {
                console.log(self);
                caller.man.addTool(self);
                caller.man.activeAbility = self.game.abilities.computerMinigame;
                self.game.scene.startMiniGame({
                    NUM: 0,
                    successCallback: function() {
                        console.log('dsgdsgs');
                    },
                    failCallback: function() {
                        console.log('fgfdgdg');
                    }
                });
                console.log(self, caller, 'success');
            },
            fail: function(self, caller) {
                console.log(self, caller, 'faile');
            }
        }
    }
})
