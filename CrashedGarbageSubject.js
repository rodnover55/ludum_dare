define(function() {
    var sling;
    return {
        init: function(self, container) {
            sling = self.game.tools['slingshot'];
            sling.register(container);
        }
    }

})
