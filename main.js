require.config({
    paths: {
        "baseManActor" : "BaseManActor",
        "baseMan" : "BaseMan",
        "baseTool" : "BaseTool",
        "baseSubject" : "BaseSubject",
        "ability" : "Ability",
        "baseAction" : "BaseAction",
        "game" : "Game",
        "tools" : "tools",
        "subjects" : "subjects",
        "mans" : "mans",
        "stage" : "Stage",
        "engineerGame": "minigames/engineer/EngineerGame"

    },
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat", "game", "mainResourses", "Stage", "engineerGame"], function(scene, CAAT, Game, mainResourses, Stage, EngineerGame) {
    var Game = new Game(mainResourses);
//    var Stronger = Game.mans.strong;
//    Stronger.addTool(Game.tools.slingshot);
//    var Exp = Game.mans.experienced;
//    Exp.addTool(Game.tools.slingshot);
//    Stronger.performAction('crash', Game.subjects.tube, {
//       callback: function(ActionCaller, Subject, options) {
//           Subject.performEffect(ActionCaller);
//       }
//    });

    scene.init(Game);

//    var miniGameDirector = new CAAT.Director().initialize(220,300,document.getElementById('viewport2'));
//    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>DIRECTOR');
//    console.log(scene.CAAT.Director());
//    try {
//        var miniGameScene = self.CAAT.Director().createScene().setBounds( 0,0,400, 400).setFillStyle('#323232');
//        var miniGame = new EngineerGame(0);
//        miniGame.init(miniGame, CAAT.Director(), scene)
//
//        CAAT.loop(0);
//    } catch(e) { console.log(e); }

});
