/**
 * Created by rodnover on 14.12.13.
 */
define(
    function (CAAT) {
        return {
            init: function(CAAT, bm) {
                var director = new CAAT.Foundation.Director().initialize(
                    document.getElementById('viewport').offsetWidth,
                    document.getElementById('viewport').offsetHeight, document.getElementById('viewport')
                );

                var scene = director.createScene();
                scene.activated= function() {
                    director.setClear(false);
                }
                var NP=20;
                var colors= ['red', 'blue', 'white', 'rgb(0,255,255)', 'yellow'];
                var gradient= director.ctx.createLinearGradient(0, 0, director.width, director.height);
                gradient.addColorStop(0, '#000000');
                gradient.addColorStop(1, '#00007f');
//
                var gr = new CAAT.ActorContainer().
                    setBounds(0,0,director.width,director.height).
                    setFillStyle(gradient).
                    enableEvents(false).
                    cacheAsBitmap();

                scene.addChild(gr);
//                scene.addChild(bm);

                CAAT.loop(1);
//                CAAT.modules.initialization.init(
//                    800, 500,
//                    'viewport',
//                    [
//                        {id:'fish', url:'http://labs.hyperandroid.com/static/CAAT-Samples/demos/demo-resources/img/anim2.png'}
//                    ],
//                    gameStart
//                );
            },
            gameStart : function(director){
//                alert('test');
            }
        };
    });
