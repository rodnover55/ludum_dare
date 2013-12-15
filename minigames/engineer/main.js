//require.config({
//    baseUrl: '../../',
//    paths: {
//        "engineerGame": "minigames/engineer/EngineerGame"
//    },
//    shim: {
//        'caat': {
//            deps: [],
//            exports: 'CAAT'
//        }
//    }
//});
//require(["scene", "caat", 'engineerGame'], function(scene, CAAT, EngineerGame) {
//    var director = new CAAT.Director().initialize(220,300,document.getElementById('viewport'));
//    var scene = director.createScene().setBounds( 0,0,400, 400).setFillStyle('#323232');
//    var miniGame = new EngineerGame(0);
//    miniGame.init(miniGame, director, scene)
//
//    CAAT.loop(0);
//})