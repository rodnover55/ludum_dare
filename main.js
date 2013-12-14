require.config({
    paths: {
        "baseMan" : "BaseManActor",
        "baseTool" : "BaseTool",
        "baseSubject" : "baseSubject",
        "abilities" : "Abilities",
        "game" : "Game"
    },
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat", "baseMan"], function(scene, CAAT, baseMan) {
    scene.init(CAAT);
});