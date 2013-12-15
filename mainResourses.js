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