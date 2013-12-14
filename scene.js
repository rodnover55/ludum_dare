/**
 * Created by rodnover on 14.12.13.
 */
define(
    ['caat'],
    function (CAAT) {
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
            init: function(game) {
                // create a director object
                const IMAGES_WIDTH = 1000;
                const IMAGES_HEIGHT = 669;

                var self = this;

                self.director = new self.CAAT.Foundation.Director().initialize(IMAGES_WIDTH, IMAGES_HEIGHT,
                    document.getElementById('viewport'));

                var backgroundImage = [{id: 'background', url: 'resources/stage1/background.png'},
                    {id: 'man-strong', url: 'resources/men/strong.png'}];

                new self.CAAT.Module.Preloader.ImagePreloader().loadImages(
                    backgroundImage,
                    function (counter, images) {
                        self.director.setImagesCache(images);

                        if (counter == backgroundImage.length) {
                            self.load_scene(game);
                        }
                    }
                );


            },

            load_scene: function(game) {
                var self = this;
                var director = self.director;
                var container = new self.CAAT.Foundation.ActorContainer().
                    setBounds(0, 0, IMAGES_WIDTH, IMAGES_HEIGHT);

                container.addChild(new self.CAAT.Foundation.Actor().setBackgroundImage('background'));
                // add a scene object to the director.
                var scene = self.director.createScene();

                var pathActor = game.currentStage.getPathActor(game.currentStage.path);
                console.log(pathActor);

                container.addChild(pathActor.setLocation(0,0));
//                game.currentStage.path.fillStyle='#323232';
//                game.currentStage.path.fill();

                scene.addChild(container);


                game.register(self, container);

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
