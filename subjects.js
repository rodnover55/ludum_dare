define(['CrashedGarbageSubject'], function (crashedGarbageSubject) {
    return {
        garbage: {
            name: "garbage",
            icon: "subject-garbage",
            canList: ['power'],
            className: 'GarbageSubject',
            respawn: [50, 360],
            point: [100, 360],
            oncomplete: 'crashedGarbage'
        },
        crashedGarbage: {
            name: "crashedGarbage",
            icon: "subject-crashed-garbage",
            className: 'crashedGarbageSubject',
            respawn: [60, 400],
            show: false,
            canList: []/*,,
            oncomplete: crashedGarbageSubject
        */},
        spaceShip: {
            name: "spaceShip",
            icon: "subject-space-ship",
            canList: ['power'],
            className: 'SpaceShipSubject',
            respawn: [550, 170],
            point: [630, 310],
            oncomplete: 'spaceShipBrokenWindow'
        },
        spaceShipBrokenWindow: {
            name: "spaceShipBrokenWindow",
            icon: "subject-space-ship-broken-window",
            canList: [],
            className: 'SpaceShipSubject',
            respawn: [550, 170],
            show: false,
            point: [630, 310]
//            oncomplete: 'SpaceShipBrokenWindow'
        }
    };
});