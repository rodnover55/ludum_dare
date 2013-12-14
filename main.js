require.config({
    paths: {
        "baseManActor" : "BaseManActor",
        "baseMan" : "BaseMan",
        "baseTool" : "BaseTool",
        "baseSubject" : "BaseSubject",
        "ability" : "Ability",
        "baseAction" : "BaseAction",
        "game" : "Game"
    },
    shim: {
        'caat': {
            deps: [],
            exports: 'CAAT'
        }
    }
});
require(["scene", "caat", "game"], function(scene, CAAT, Game) {
    scene.init(CAAT);

    var Game = new Game({
        mans: {
            'sweet' : {
                name: 'Sweet',
                speed: 1,
                jump: 1,
                icon: 'path/to/icon',
                actions: {
                    'jump' : {
                        name: 'jump',
                        sprite: 'jumpSprite'
                    }
                }
            }
        },
        tools: {
            'axe' : {
                name: 'Axe',
                canList: ['sweet'],
                icon: 'axe_icon',
                abilities: {
                    'blood' : {
                        name: 'blood',
                        action: 'kick'
                    }

                }
            }
        },
        abilities: {},
        subjects: {},
        actions: {}

    });
});