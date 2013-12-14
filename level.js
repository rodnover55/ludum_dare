define(['scene', 'director', 'stage' ], function(scene, diretor, stage) {

    var Stage = function(options) {
        var self = this;
        self.scene = options.scene;
        self.director = options.director;
        self.stage = options.stage;

        self.stage = 1;

        var pth = new CAAT.Path();

        switch (self.stage) {
            case 1 :
                pth.beginPath(0,300).
                    addCubicTo( 0,200, 100,200, 100,300).
                    addCubicTo( 50,80, 0,10, 100,50).
                    endPath();
                break
        }


        var pa = new CAAT.PathActor().
            setBounds(100,0,600,director.height).
            create().
            setPath(
                pth
            ).
            setInteractive(true);


        scene.addChild(pa);

    };

})