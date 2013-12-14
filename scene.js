/**
 * Created by rodnover on 14.12.13.
 */
define(
    function (CAAT) {
        return {
            init: function(CAAT, bm) {

                var self = this;
                self.CAAT = CAAT;
                var director = new self.CAAT.Foundation.Director().initialize(
                    document.getElementById('viewport').offsetWidth,
                    document.getElementById('viewport').offsetHeight, document.getElementById('viewport')
                );

                new self.CAAT.ImagePreloader().loadImages(
                    [
                        {id:'background',    url:'resources/stage1/background.png'}
                    ],
                    function( counter, images ) {
                        director.setImagesCache(images);
                        self.__scene(director);
                    }
                );

            },

            __scene: function(director) {
                var scene = director.createScene();
                scene.activated= function() {
                    director.setClear(false);
                }

//                var NP=20;
//                var colors= ['red', 'blue', 'white', 'rgb(0,255,255)', 'yellow'];
//                var gradient= director.ctx.createLinearGradient(0, 0, director.width, director.height);
//                gradient.addColorStop(0, '#000000');
//                gradient.addColorStop(1, '#00007f');

                var gr = new self.CAAT.ActorContainer().
                    setBounds(0, 0, director.width, director.height).

//                gr.addChild(new self.CAAT.Foundation.Actor().setBackgroundImage('background')).
//                    setBounds(0, 0, director.widths, director.height);
//                    setFillStyle(gradient).
//                    enableEvents(false).
                    setFillStyle('yellow').
//                    setBackgroundImage(starsImage, true);
//                    setSpriteIndex(0).
                    cacheAsBitmap();

                scene.addChild(gr);
//                scene.addChild(bm);

                self.CAAT.loop(1);
            },
            gameStart : function(director){
//                alert('test');
            }
        };
    });
