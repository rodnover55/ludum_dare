/**
 * Created by rcn on 15/12/13.
 */
define(
    ['caat'],
    function(CAAT) {

        var EngineerGame = function(options) {
            var self = this;
            self.setNum = options;
            self.setupImageSet();
            self.status = 'not started';
        }

        EngineerGame.prototype.setupImageSet = function() {
            var self = this;
            switch (0) {
                case (0) :
                    self.images = [
                       {id:'sprite0',     url:'minigames/engineer/img/g1/1.png'},
                       {id:'sprite1',     url:'minigames/engineer/img/g1/2.png'},
                       {id:'sprite2',     url:'minigames/engineer/img/g1/3.png'},
                       {id:'sprite3',     url:'minigames/engineer/img/g1/4.png'},
                       {id:'sprite4',     url:'minigames/engineer/img/g1/5.png'},
                       {id:'sprite5',     url:'minigames/engineer/img/g1/6.png'},
                       {id:'sprite6',     url:'minigames/engineer/img/g1/7.png'},
                       {id:'sprite7',     url:'minigames/engineer/img/g1/8.png'},
                       {id:'sprite8',     url:'minigames/engineer/img/g1/9.png'}
                    ];
                    self.greedSize = 3;
                    self.roundTime = 10;

                }
//            return self;
        }


        EngineerGame.prototype.init = function(gameObj, director, scene) {
            var self = gameObj;
            self.status = 'in progress';

            function format( time ) {
                var millis= time%1000;
                time/=1000;
                time>>=0;
                var seconds= time%60;
                time/=60;
                time>>=0;
                var hours= time;
                return ''+
                    (seconds>9 ? seconds : '0'+seconds)+
                    '.'+
                    millis;
            }

            var message = new CAAT.TextActor().
                setFont("20px Lucida sans").
                calcTextSize(director).
                setOutline(false).
                centerOn(70, 245).
                enableEvents(false);

            var text = new CAAT.TextActor().
                setFont("20px Lucida sans").
                calcTextSize(director).
                setOutline(false).
                centerOn(70, 245).
                enableEvents(false).
                setFrameTime(0,20000);

            scene.addChild(text);

            scene.createTimer(
                0,
                Number.MAX_VALUE,
                function(scene_time, timer_time, timertask_instance)  {   // timeout
                },
                function(scene_time, timer_time, timertask_instance)  {   // tick
                    text.setText( format(timer_time) );
                },
                function(scene_time, timer_time, timertask_instance)  {   // cancel
                }
            )

            text.addListener( {
                actorLifeCycleEvent : function( actor, event_type, time ) {

                    // on expiration notification,
                    if ( event_type==='expired' ) {
                        console.log(self.status);
                        self.status = 'Loose';
                        message.setText('You Loose').centerOn(110, 260);
                        scene.addChild(message);
                        console.log('You Loose');
                        return EngineerGame;
                    }
                }
            } );




            new CAAT.ImagePreloader().loadImages(
                self.images,
            function( counter, images ) {
                if ( counter == images.length ) {
                    director.setImagesCache(images);
                    var actors = [];
                    for(var index in self.images) {
                        var x,y;
                        var rotation =
                            {
                                0: 0,
                                1: 0.5,
                                2: 1,
                                3: 1.5
                            }
                        var rotate = Math.floor(Math.random() * (4 - 0) + 0);
                        var coords = {
                            0: { x: 40,  y: 40  },
                            1: { x: 110, y: 40  },
                            2: { x: 180, y: 40  },
                            3: { x: 40,  y: 110 },
                            4: { x: 110, y: 110 },
                            5: { x: 180, y: 110 },
                            6: { x: 40,  y: 180 },
                            7: { x: 110, y: 180 },
                            8: { x: 180, y: 180 }
                        }
                        var sprite =
                            new CAAT.Actor().
                                setBackgroundImage(director.getImage('sprite' + index), true).
                                centerOn(coords[index].x, coords[index].y).
                                setRotation( Math.PI *  rotation[rotate]).
                                enableEvents(true);
                        sprite.rotatedOn = rotate;
                        actors.push(sprite);

                        sprite.mouseClick = function(mouseEvent) {
                            this.rotatedOn = this.rotatedOn == 3 ? 0 : (this.rotatedOn + 1);
                            this.setRotation( Math.PI *  rotation[this.rotatedOn]);
                            self.checkWinRequirements(self, actors, scene, message, text);
                        }
                        scene.addChild(sprite);
                    }
                }
            });
        }

        EngineerGame.prototype.checkWinRequirements = function(gameObj, actors, scene, message, text) {
            var self = this;
            for(var index in actors) {
                console.log(actors[index].rotatedOn);
                if(actors[index].rotatedOn != 0) {
                    return false;
                }
            }
            console.log('You Win!!!');
            message.setText('You Win!!!').centerOn(110, 260);
            scene.removeChild(text);
            scene.addChild(message);
            self.state = 'win';
        }

        return EngineerGame;
    })