define(['SlingShotTool'], function (SlingShotTool) {
    return {
        slingshot : {
            name: 'slingshot',
            icon: 'slingShotIcon',
            canList: ['getSlingShot'],
            abilities: ['slingshooting'],
            action: {
                name: 'shot',
                sprite: 'slingshotShot'
            },
            callbacks: SlingShotTool.callbacks
        }
    };
});