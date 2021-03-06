/**
 * Created by rodnover on 14.12.13.
 */
define(
    ['caat', 'engineerGame'],
    function (CAAT, EngineerGame) {
        const IMAGES_WIDTH = 1200;
        const IMAGES_HEIGHT = 668;

        return {
            CAAT: CAAT,

            load_image: function(id, image, call) {
                var self = this;
                new self.CAAT.Module.Preloader.ImagePreloader().loadImages(
                    [{id: id, url: image}],
                    function (counter, images) {
                        self.director.setImagesCache(images);
                        if (call == undefined) {
                            call();
                        }
                    }
                );
            },
            startMiniGame: function(options) {
                    self.director = new self.CAAT.Foundation.Director().initialize(IMAGES_WIDTH, IMAGES_HEIGHT,
                    document.getElementById('viewport'));
                    var miniGameScene = self.director.createScene().setBounds( 0,0,400, 400).setFillStyle('#323232');
                    var miniGame = new EngineerGame(options);
                    miniGame.init(miniGame, self.director, miniGameScene);
                    console.log('><<<<<<<<Minigame');
                    console.log(miniGame);
            },
            init: function(game) {
                // create a director object

                var self = this;


                self.director = new self.CAAT.Foundation.Director().initialize(IMAGES_WIDTH, IMAGES_HEIGHT,
                    document.getElementById('viewport'));

                var backgroundImage = [
                    {id: 'background', url: 'resources/stage1/background.png'},
                    { id: 'man-strong-icon', url: 'resources/men/strong.png' },
                    { id: 'man-strong-sprite', url: 'resources/men/strong-actions.png' },

                    { id: 'man-experienced-icon', url: 'resources/men/experienced.png' },
                    { id: 'man-experienced-sprite', url: 'resources/men/experienced-actions.png' },


                    { id: 'man-sweet-icon', url: 'resources/men/sweet.png' },
                    { id: 'man-sweet-sprite', url: 'resources/men/sweet-actions.png' },

                    { id: 'subject-garbage', url: 'resources/subjects/garbage.png' },
                    { id: 'subject-crashed-garbage', url: 'resources/subjects/crashed-garbage.png' },

                    { id: 'tool-sling', url: 'resources/tools/sling.png' },
                    { id: 'tool-comp', url: 'resources/tools/comp.png' },

                    { id: 'subject-space-ship', url: 'resources/subjects/space-ship.png' },
                    { id: 'subject-space-ship-broken-window', url: 'resources/subjects/space-ship-broken-window.png' }
                ];

                new self.CAAT.Module.Preloader.ImagePreloader().loadImages(
                    backgroundImage,
                    function (counter, images) {
                        self.director.setImagesCache(images);

                        if (counter == backgroundImage.length) {
                            self.load_scene(game);
                        }
                    }
                );
                game.scene = self;


            },

            load_scene: function(game) {
                var self = this;
                var director = self.director;
                var container = new self.CAAT.Foundation.ActorContainer().
                    setBounds(0, 0, IMAGES_WIDTH, IMAGES_HEIGHT);

                container.addChild(new self.CAAT.Foundation.Actor().setBackgroundImage('background'));
                // add a scene object to the director.
                var scene = self.director.createScene();

                scene.addChild(container);

                game.register(container, scene);

//                director.enableResizeEvents(self.CAAT.Foundation.Director.RESIZE_BOTH, function(directory, width, height) {
//                    var proportion = 1;
//                    if ((director.height > IMAGES_HEIGHT) || (director.width > IMAGES_WIDTH)) {
//                        proportion = Math.max((director.height / IMAGES_HEIGHT), (director.width / IMAGES_WIDTH));
//                        container.addBehavior(
//                            new self.CAAT.Behavior.ScaleBehavior().
//                                setValues(1, proportion, 1, proportion, 0, 0).
//                                setFrameTime(0, 0)
//                        );
//                    }
//                    if (director.height < container.height * proportion) {
//                        container.setBounds(0, director.height - container.height * proportion, IMAGES_WIDTH, IMAGES_HEIGHT);
//                    }
//                });
                // start the animation loop
                self.CAAT.loop(5);
            },
            gameStart : function(director){
            }
        };
    });
