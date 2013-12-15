define(['SlingShotTool'], function (SlingShotTool) {
    return {
        slingshot : {
            name: 'slingshot',
            icon: 'slingShotIcon',
            canList: ['slingshooting'],
            action: {
                name: 'shot',
                sprite: 'slingshotShot'
            },
            callbacks: SlingShotTool.callbacks
        }
    };
});