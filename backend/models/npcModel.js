import mongoose from 'mongoose';

const npcSchema = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    nickname: {
        type: String
    },
    race: {
        type: String,
        required: true
    },
    class: {
        type: String
    },
    subclass: {
        type: String
    },
    level: {
        type: Number
    },
    alignment: {
        type: String,
        required: true
    },
    background: {
        type: String
    },
    description: {
        type: String
    },
    stats: {
        armorClass: {
            type: Number,
            default: 0
        },
        initiative: {
            type: Number,
            default: 0
        },
        speed: {
            type: Number,
            default: 0
        },
        hitPointMax: {
            type: Number,
            default: 0
        },
        profBonus: {
            type: Number,
            default: 0
        },
        inspiration: {
            type: Boolean,
            default: false
        },
        vitals: {
            strength: {
                type: Number,
                default: 0
            },
            strengthModifier: {
                type: Number,
                default: 0
            },
            dexterity: {
                type: Number,
                default: 0
            },
            dexModifier: {
                type: Number,
                default: 0
            },
            constitution: {
                type: Number,
                default: 0
            },
            constModifier: {
                type: Number,
                default: 0
            },
            intelligence: {
                type: Number,
                default: 0
            },
            intelModifier: {
                type: Number,
                default: 0
            },
            wisdom: {
                type: Number,
                default: 0
            },
            wisdomModifier: {
                type: Number,
                default: 0
            },
            charisma: {
                type: Number,
                default: 0
            },
            charismaModifier: {
                type: Number,
                default: 0
            }
        },
        savingThrows: {
            strengthST: {
                type: Number,
                default: 0
            },
            dexterityST: {
                type: Number,
                default: 0
            },
            constitutionST: {
                type: Number,
                default: 0
            },
            intelligenceST: {
                type: Number,
                default: 0
            },
            wisdomST: {
                type: Number,
                default: 0
            },
            charismaST: {
                type: Number,
                default: 0
            }
        },
        skills: {
            acrobatics: {
                type: Number,
                default: 0
            },
            animalHandling: {
                type: Number,
                default: 0
            },
            arcana: {
                type: Number,
                default: 0
            },
            athletics: {
                type: Number,
                default: 0
            },
            deception: {
                type: Number,
                default: 0
            },
            history: {
                type: Number,
                default: 0
            },
            insight: {
                type: Number,
                default: 0
            },
            intimidation: {
                type: Number,
                default: 0
            },
            investigation: {
                type: Number,
                default: 0
            },
            medicine: {
                type: Number,
                default: 0
            },
            nature: {
                type: Number,
                default: 0
            },
            perception: {
                type: Number,
                default: 0
            },
            performance: {
                type: Number,
                default: 0
            },
            persuasion: {
                type: Number,
                default: 0
            },
            religion: {
                type: Number,
                default: 0
            },
            slightOfHand: {
                type: Number,
                default: 0
            },
            stealth: {
                type: Number,
                default: 0
            },
            survival: {
                type: Number,
                default: 0
            }
        },
        proficiencies: {
            weaponsProf: {
                type: Array
            },
            armorProf: {
                type: Array
            },
            toolProf: {
                type: Array
            },
            languageProf: {
                type: Array
            }
        },
        traits: {
            type: Array
        },
        equipment: {
            type: Array
        }
    },
    relationships: {
        relationship1: {
            status: {
                type: Boolean,
                default: false
            },
            type: {
                type: String
            },
            name: {
                type: String
            }
        },
        relationship2: {
            status: {
                type: Boolean,
                default: false
            },
            type: {
                type: String
            },
            name: {
                type: String
            }
        },
        relationship3: {
            status: {
                type: Boolean,
                default: false
            },
            type: {
                type: String
            },
            name: {
                type: String
            }
        },
        relationship4: {
            status: {
                type: Boolean,
                default: false
            },
            type: {
                type: String
            },
            name: {
                type: String
            }
        }
    }
});

const NPCs = mongoose.model('NPCs', npcSchema)
export default NPCs