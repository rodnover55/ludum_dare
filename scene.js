/**
 * Created by rodnover on 14.12.13.
 */
define(
    function (CAAT) {
        return {
            init: function(CAAT, bm) {
                // create a director object
                const IMAGES_WIDTH = 1000;
                const IMAGES_HEIGHT = 669;

                var director = new CAAT.Foundation.Director().initialize(IMAGES_WIDTH, IMAGES_HEIGHT, document.getElementById('viewport'));

                // add a scene object to the director.
                var scene = director.createScene();
                var actors = [];
                var idActors = 0;
                var backgroundImage = {id: 'background', url:'resources/stage1/background.png'};


                var container = new CAAT.Foundation.ActorContainer().
                    setBounds(0, 0, IMAGES_WIDTH, IMAGES_HEIGHT);

                scene.addChild(container);

                new CAAT.Module.Preloader.ImagePreloader().loadImages(
                    [backgroundImage],
                    function (counter, images) {idActors
                        director.setImagesCache(images);
                        container.addChild(new CAAT.Foundation.Actor().setBackgroundImage('background'), true);
                    }
                );
                director.enableResizeEvents(CAAT.Foundation.Director.RESIZE_BOTH, function(directory, width, height) {
                    var proportion = 1;
                    if ((director.height > IMAGES_HEIGHT) || (director.width > IMAGES_WIDTH)) {
                        proportion = Math.max((director.height / IMAGES_HEIGHT), (director.width / IMAGES_WIDTH));
                        container.addBehavior(
                            new CAAT.Behavior.ScaleBehavior().
                                setValues(1, proportion, 1, proportion, 0, 0).
                                setFrameTime(0, 0)
                        );
                    }
                    if (director.height < container.height * proportion) {
                        container.setBounds(0, director.height - container.height * proportion, IMAGES_WIDTH, IMAGES_HEIGHT);
                    }
                });
                // start the animation loop
                CAAT.loop(5);
            },

            __scene: function(director) {
//                var NP=20;
//                var colors= ['red', 'blue', 'white', 'rgb(0,255,255)', 'yellow'];
//                var gradient= director.ctx.createLinearGradient(0, 0, director.width, director.height);
//                gradient.addColorStop(0, '#000000');
//                gradient.addColorStop(1, '#00007f');







            },
            gameStart : function(director){
//                alert('test');
            }
        };
    });
