define(['mans', 'tools', 'subjects'], function (mans, tools, subjects) {
    return {
        mans: mans,
        tools: tools,
        subjects: subjects,
        actions: {},
        abilities: {
                power: {
                    name: 'power',
                    icon: 'ability-power',
                    className: 'PowerAbility'
                },
                getSlingShot: {
                    name: "getSlingShot",
                    icon: '',
                    className: 'GetAbility'
                },
                slingshooting: {
                    name: "slingshooting",
                    icon: "",
                    className: "SlingShotAbility"
                },
                getComputer: {
                    name: "getComputer",
                    icon: "",
                    className: "GetComputerAbility"
                },
                computerMinigame: {
                    name: 'computerMinigame',
                    icon: "",
                    className: "computerMinigame"
                }
        },
        stages: [
        [
            [0, 310],
            [260, 350],
            [560, 300],
            [1560, 370]
        ]
    ]
    };
});