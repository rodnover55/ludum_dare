/**
 * Created by rodnover on 14.12.13.
 */
define(
    function (CAAT) {
        return {
            init: function(CAAT) {
                var director = new CAAT.Foundation.Director().initialize(
                    100, 100, document.getElementById('viewport')
                )

                var scene = director.createScene();
                var circle = new CAAT.Foundation.UI.ShapeActor().
                    setLocation(20, 20).
                    setSize(60, 60).
                    setFillStyle('#ff0000').
                    setStrokeStyle('#000000');

                scene.addChild(circle);

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
