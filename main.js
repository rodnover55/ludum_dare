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
        "stage" : "Stage"
    },
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat", "game", "mainResourses", "Stage"], function(scene, CAAT, Game, mainResourses, Stage) {
    mainResourses.stages = [
        [
            [0, 310],
            [260, 350],
            [560, 300],
            [1560, 370]
        ]
    ];
    var Game = new Game(mainResourses);
    var Stronger = Game.mans.strong;
    Stronger.addTool(Game.tools.slingshot);
    var Exp = Game.mans.experienced;
    Exp.addTool(Game.tools.slingshot);
    Stronger.performAction('crash', Game.subjects.tube, {
       callback: function(ActionCaller, Subject, options) {
           Subject.performEffect(ActionCaller);
       }
    });

    scene.init(Game);
});
