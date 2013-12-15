define(['SlingShotTool', 'ComputerTool'], function (SlingShotTool, ComputerTool) {
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
        },
        computer: {
            name: 'computer',
            icon: 'computerIcon',
            canList: ['getComputer'],
            abilities: ['computerMinigame'],
            action: {
                name: 'game',
                sprite: 'blabla'
            },
            callbacks: ComputerTool.callbacks
        }
    };
});