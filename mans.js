define(function () {
    return {
        strong: {
            name: 'strong',
            speed: 1,
            jump: 1,
            actions: {
                stand: {
                    sprites: [12, 13, 14],
                    time: 300
                },
                move: {
                    sprites: [6, 7, 8, 9, 10, 11],
                    time: 100
                }
//                jump : {
//                    name: "jump",
//                    sprite: "strongManJump"
//                },
//                crash : {
//                    name: "crash",
//                    action: "crash"
//                },
//                say : {
//                    name: "say",
//                    action: "say"
//                }
            },
            inventory: {

            },
            abilities: ['power'],
            icon: 'man-strong-icon',
            actionFile: 'man-strong-sprite',
            actionSize: [4, 6],
            respawn: [300, 300]
        },
//        experienced: {
//            name: 'experienced',
//            speed: 1,
//            jump: 1,
//            actions: {
//                jump : {
//                    name: "jump",
//                    sprite: "experiencedManJump"
//                }
//            },
//            inventory: {
//
//            },
//            abilities: {
//            },
//            icon: 'man-experienced-icon',
//            actionFile: 'man-strong-sprite',
//            respawn: [370, 300]
//        }//,
        sweet: {
            name: 'sweet',
            speed: 1,
            jump: 1,
            icon: 'man-sweet-icon',
            actionFile: 'man-sweet-sprite',
            respawn: [560, 350],
            abilities: ['power'],
            actions: {
                stand: {
                    sprites: [24, 25, 26, 27, 28, 29, 30],
                    time: 300
                },
                move: {
                    sprites: [0, 1, 2, 3, 4],
                    time: 100
                }
            },
            actionFile: 'man-sweet-sprite',
            actionSize: [4, 8]
        }
    };
});