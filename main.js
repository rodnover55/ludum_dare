require.config({
    paths: {
        "baseManActor" : "BaseManActor",
        "baseMan" : "BaseMan",
        "baseTool" : "BaseTool",
        "baseSubject" : "BaseSubject",
        "ability" : "Ability",
        "game" : "Game"
    },
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat", "baseMan", "baseTool", "ability"], function(scene, CAAT, BaseMan, BaseTool, Ability) {
    scene.init(CAAT);
    var man = new BaseMan({name: 'Dwarf', speed: 1, jump: 1});
    var tool = new BaseTool({name: 'axe', abilities : [new Ability({name: 'blood', action: function() {}}),
        new Ability({name: 'death', action: function() {}})]});
    man.addTool(tool);
    man.addTool(tool);
    console.log(man.inventory);
    man.removeTool(tool);

});
