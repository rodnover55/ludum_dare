require.config({
    paths: {
        "BaseManActor" : "BaseManActor",
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
require(["scene", "caat", "BaseManActor"], function(scene, CAAT, BaseManActor) {
    // TODO: Create game
    bm = new BaseManActor(null);
    scene.init(CAAT, bm);
});