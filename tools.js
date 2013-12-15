define(['SlingShotTool'], function (SlingShotTool) {
    return {
        slingshot : {
            name: 'slingshot',
            icon: 'tool-sling',
            canList: ['getSlingShot'],
            abilities: ['slingshooting'],
            action: {
                name: 'shot',
                sprite: 'slingshotShot'
            },
            respawn: [50, 450],
            point: [70, 450],
            callbacks: SlingShotTool.callbacks
        }
    };
});