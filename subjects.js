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
        */}
    };
});