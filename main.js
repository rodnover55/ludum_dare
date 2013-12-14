require.config({
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat"], function(scene, CAAT) {
    scene.init(CAAT);
});