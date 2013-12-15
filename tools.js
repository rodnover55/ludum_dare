define(['SlingShotTool', 'ComputerTool'], function (SlingShotTool, ComputerTool) {
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
        },
        computer: {
            name: 'computer',
            icon: 'tool-comp',
            canList: ['getComputer'],
            abilities: ['computerMinigame'],
            action: {
                name: 'game',
                sprite: 'blabla'
            },
            respawn: [650, 500],
            point: [600, 450],
            callbacks: ComputerTool.callbacks
        }
    };
});