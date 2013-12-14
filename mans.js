define(function () {
    return {
        strong: {
            name: 'strong',
            speed: 1,
            jump: 1,
            actions: {
                jump : {
                    name: "jump",
                    sprite: "strongManJump"
                },
                crash : {
                    name: "crash",
                    action: "crash"
                },
                say : {
                    name: "say",
                    action: "say"
                }
            },
            inventory: {

            },
            abilities: {

            },
            icon: 'strongManIcon'
        },
        experienced: {
            name: 'experienced',
            speed: 1,
            jump: 1,
            actions: {
                jump : {
                    name: "jump",
                    sprite: "experiencedManJump"
                }
            },
            inventory: {

            },
            abilities: {
            },
            icon: 'strongManIcon'
        }
    };
});