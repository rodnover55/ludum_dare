/**
 * Created by rodnover on 14.12.13.
 */
define(
    function (CAAT) {
        return {
            CAAT: CAAT,
            init: function(game) {
                // create a director object
                const IMAGES_WIDTH = 1000;
                const IMAGES_HEIGHT = 669;

                var director = new self.CAAT.Foundation.Director().initialize(IMAGES_WIDTH, IMAGES_HEIGHT,
                    document.getElementById('viewport'));

                // add a scene object to the director.
                var scene = director.createScene();
                var backgroundImage = {id: 'background', url:'resources/stage1/background.png'};


                var container = new self.CAAT.Foundation.ActorContainer().
                    setBounds(0, 0, IMAGES_WIDTH, IMAGES_HEIGHT);

                scene.addChild(container);

                game.register(scene);

                new self.CAAT.Module.Preloader.ImagePreloader().loadImages(
                    [backgroundImage],
                    function (counter, images) {
                        director.setImagesCache(images);
                        container.addChild(new self.CAAT.Foundation.Actor().setBackgroundImage('background'), true);
                    }
                );
                director.enableResizeEvents(self.CAAT.Foundation.Director.RESIZE_BOTH, function(directory, width, height) {
                    var proportion = 1;
                    if ((director.height > IMAGES_HEIGHT) || (director.width > IMAGES_WIDTH)) {
                        proportion = Math.max((director.height / IMAGES_HEIGHT), (director.width / IMAGES_WIDTH));
                        container.addBehavior(
                            new self.CAAT.Behavior.ScaleBehavior().
                                setValues(1, proportion, 1, proportion, 0, 0).
                                setFrameTime(0, 0)
                        );
                    }
                    if (director.height < container.height * proportion) {
                        container.setBounds(0, director.height - container.height * proportion, IMAGES_WIDTH, IMAGES_HEIGHT);
                    }
                });
                // start the animation loop
                self.CAAT.loop(5);
            },

            __scene: function(director) {
            },
            gameStart : function(director){
            }
        };
    });
