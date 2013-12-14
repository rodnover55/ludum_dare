define(function () {
    return {
        tube: {
            name: "tube",
            icon: "tibeIcon",
            canList: ['strong'],
            action: {
                name: "crash",
                sprite: "tubeCrash"
            },
            successCallback: {
                oncall : "self.destroy"
            },
            failCallback: {
                oncall: "caller.say"
            }
        },
        laser: {
            name: "laser",
            icon: "laseIcon",
            canList: ["experienced"],
            action: {
                name: "laser",
                before: "startLaserMiniGame",
                after: "endLaserMiniGame"
            }
        }


    };
});