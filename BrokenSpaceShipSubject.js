/**
 * Created by rodnover on 15.12.13.
 */
define(['BaseSubject'], function(BaseSubject){
    var comp;
    return {
        init: function(self, container) {
            comp = self.game.tools['computer'];
            comp.register(container);
        }
    }
});