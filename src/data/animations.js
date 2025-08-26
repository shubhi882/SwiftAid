export const procedureAnimations = {
    cpr: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "CPR",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Heart",
                    sr: 1,
                    ks: {
                        o: { a: 1, k: [
                            { t: 0, s: [100], h: 1 },
                            { t: 30, s: [50], h: 1 },
                            { t: 60, s: [100], h: 1 }
                        ]},
                        s: { a: 1, k: [
                            { t: 0, s: [100, 100], h: 1 },
                            { t: 30, s: [90, 90], h: 1 },
                            { t: 60, s: [100, 100], h: 1 }
                        ]}
                    },
                    shapes: [
                        {
                            ty: "gr",
                            it: [
                                {
                                    ty: "rc",
                                    p: { a: 0, k: [0, 0] },
                                    s: { a: 0, k: [50, 50] },
                                    r: { a: 0, k: 0 }
                                },
                                {
                                    ty: "fl",
                                    c: { a: 0, k: [0.91, 0.3, 0.24, 1] }
                                }
                            ]
                        }
                    ],
                    ip: 0,
                    op: 60,
                    st: 0
                }
            ]
        }
    },
    choking: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 90,
            w: 200,
            h: 200,
            nm: "Choking",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Hand",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [100, 100], e: [100, 80] },
                            { t: 45, s: [100, 80], e: [100, 100] },
                            { t: 90, s: [100, 100] }
                        ]},
                        s: { a: 0, k: [100, 100] }
                    }
                }
            ]
        }
    },
    bleeding: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Bleeding",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Bandage",
                    sr: 1,
                    ks: {
                        o: { a: 1, k: [
                            { t: 0, s: [0], e: [100] },
                            { t: 30, s: [100] }
                        ]},
                        s: { a: 0, k: [100, 100] }
                    }
                }
            ]
        }
    },
    burns: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Burns",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Water",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [100, 0], e: [100, 200] },
                            { t: 60, s: [100, 200] }
                        ]},
                        o: { a: 1, k: [
                            { t: 0, s: [100], e: [0] },
                            { t: 60, s: [0] }
                        ]}
                    }
                }
            ]
        }
    },
    fracture: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Fracture",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Bandage",
                    sr: 1,
                    ks: {
                        o: { a: 1, k: [
                            { t: 0, s: [0], e: [100] },
                            { t: 30, s: [100] }
                        ]},
                        r: { a: 1, k: [
                            { t: 0, s: [0], e: [360] },
                            { t: 60, s: [360] }
                        ]}
                    }
                }
            ]
        }
    },
    heartattack: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "HeartAttack",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "ECG",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [0, 100], e: [200, 100] },
                            { t: 60, s: [200, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    snakebite: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 90,
            w: 200,
            h: 200,
            nm: "SnakeBite",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Snake",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [0, 100], e: [100, 100] },
                            { t: 45, s: [100, 100], e: [200, 100] },
                            { t: 90, s: [200, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    heatstroke: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "HeatStroke",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Thermometer",
                    sr: 1,
                    ks: {
                        s: { a: 1, k: [
                            { t: 0, s: [100, 100], e: [110, 110] },
                            { t: 30, s: [110, 110], e: [100, 100] },
                            { t: 60, s: [100, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    seizure: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Seizure",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Brain",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [100, 100], e: [105, 100] },
                            { t: 15, s: [105, 100], e: [95, 100] },
                            { t: 30, s: [95, 100], e: [100, 100] },
                            { t: 60, s: [100, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    poisoning: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Poisoning",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Bottle",
                    sr: 1,
                    ks: {
                        r: { a: 1, k: [
                            { t: 0, s: [0], e: [-45] },
                            { t: 30, s: [-45], e: [0] },
                            { t: 60, s: [0] }
                        ]}
                    }
                }
            ]
        }
    },
    drowning: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Drowning",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Waves",
                    sr: 1,
                    ks: {
                        p: { a: 1, k: [
                            { t: 0, s: [0, 100], e: [200, 100] },
                            { t: 60, s: [200, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    asthma: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Asthma",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Lungs",
                    sr: 1,
                    ks: {
                        s: { a: 1, k: [
                            { t: 0, s: [100, 100], e: [90, 90] },
                            { t: 30, s: [90, 90], e: [100, 100] },
                            { t: 60, s: [100, 100] }
                        ]}
                    }
                }
            ]
        }
    },
    pregnancy: {
        data: {
            v: "5.7.1",
            fr: 30,
            ip: 0,
            op: 60,
            w: 200,
            h: 200,
            nm: "Pregnancy",
            ddd: 0,
            assets: [],
            layers: [
                {
                    ty: 4,
                    nm: "Heart",
                    sr: 1,
                    ks: {
                        o: { a: 1, k: [
                            { t: 0, s: [100], e: [50] },
                            { t: 30, s: [50], e: [100] },
                            { t: 60, s: [100] }
                        ]}
                    }
                }
            ]
        }
    }
};
