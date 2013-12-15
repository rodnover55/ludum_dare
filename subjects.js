define(['CrashedGarbageSubject'], function (crashedGarbageSubject) {
    return {
        tube: {
            name: "garbage",
            icon: "subject-garbage",
            canList: ['power'],
            className: 'GarbageSubject',
            respawn: [50, 360],
            point: [100, 360],
            oncomplete: crashedGarbageSubject
//            action: {
//                name: "crash",
//                sprite: "tubeCrash"
//            },
//            successCallback: {
//                oncall : "self.destroy"
//            },
//            failCallback: {
//                oncall: "caller.say"
//            }
        }
//        laser: {
//            name: "laser",
//            icon: "laseIcon",
//            canList: ["experienced"],
//            action: {
//                name: "laser",
//                before: "startLaserMiniGame",
//                after: "endLaserMiniGame"
//            }
//        }


    };
});