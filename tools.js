define(['SlingShotTool'], function (SlingShotTool) {
    return {
        slingshot : {
            name: 'slingshot',
            icon: 'slingShotIcon',
            canList: ['getSlingShot'],
            abilities: ['slingsooting'],
            action: {
                name: 'shot',
                sprite: 'slingshotShot'
            },
            callbacks: SlingShotTool.callbacks
        }
    };
});