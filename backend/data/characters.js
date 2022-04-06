const characters = [
    {
        _id: '1',
        image: '/images/mindartis.jpg',
        name: 'Mindartis Liadon',
        firstname: 'Mindartis',
        nickname: 'Mindy',
        race: 'high elf',
        class: 'barbarian',
        subclass: 'eagle totem',
        level: 6,
        alignment: 'neutral',
        background: 'guild artisan',
        description: 'Arrogant and exacting, Mindartis believes that beauty is the meaning of life and conducts himself accordingly.  A couturier and jeweler by trade, he is often mistaken as either a noble or a particularly wealthy and eccentric wizard due to his style choices.  Although seemingly aloof, Mindartis has a quick temper and easily falls into a barbarian rage when insulted.',
        stats: {
            armorClass: 14,
            initiative: 2,
            speed: 40,
            hitPointMax: 57,
            profBonus: 3,
            inspiration: false,
            vitals: {
                strength: 16,
                strengthModifier: 3,
                dexterity: 16,
                dexModifier: 3,
                constitution: 14,
                constModifier: 2,
                intelligence: 13,
                intelModifier: 1,
                wisdom: 8,
                wisdomModifier: -1,
                charisma: 10,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 6,
                dexterityST: 3,
                constitutionST: 5,
                intelligenceST: 1,
                wisdomST: -1,
                charismaST: 0
            },
            skills: {
                acrobatics: 3,
                animalHandling: -1,
                arcana: 1,
                athletics: 6,
                deception: 0,
                history: 1,
                insight: 2,
                intimidation: 3,
                investigation: 1,
                medicine: -1,
                nature: 1,
                perception: 2,
                performance: 2,
                persuasion: 3,
                religion: 1,
                slightOfHand: 3,
                stealth: 3,
                survival: -1
            },
            proficiencies: {
                weaponsProf: ['longsword', 'shortsword', 'longbow', 'shortbow', 'simple weapons', 'melee weapons'],
                armorProf: ['light armor', 'medium armor', 'shields'],
                toolProf: ['jeweler\'s tools'],
                languageProf: ['common', 'elvish', 'dwarvish']
            },
            traits: ['darkvision', 'fey ancestry', 'trance', 'unarmored defense', 'rage', 'reckless attack', 'danger sense', 'eagle totem'],
            equipment: ['javelin x4', 'longsword', 'shortbow']
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Parent',
                name: 'Theirastra'
            },
            relationship2: {
                status: true,
                type: 'Parent',
                name: 'Leondartis'
            },
            relationship3: {
                status: true,
                type: 'Pibling',
                name: 'Leyandra'
            },
            relationship4: {
                status: true,
                type: 'Cousin',
                name: 'Enna'
            }
        }
    },

    {
        _id: '2',
        image: '/images/enna.jpg',
        name: 'Enna Xiloscient',
        firstname: 'Enna',
        nickname: null,
        race: 'high elf',
        class: 'wizard',
        subclass: 'necromancer',
        level: 5,
        alignment: 'chaotic good',
        background: 'sage',
        description: 'Enna values knowledge above all else, and easily loses any instinct for self-preservation when faced with the opportunity to learn something new.  She hoards books in the way others hoard gold, and only values wealth insomuch as it can be used to further her studies.',
        stats: {
            armorClass: 12,
            initiative: 2,
            speed: 30,
            hitPointMax: 32,
            profBonus: 3,
            inspiration: false,
            vitals: {
                strength: 8,
                strengthModifier: -1,
                dexterity: 15,
                dexModifier: 2,
                constitution: 14,
                constModifier: 2,
                intelligence: 20,
                intelModifier: 5,
                wisdom: 11,
                wisdomModifier: 0,
                charisma: 12,
                charismaModifier: 1
            },
            savingThrows: {
                strengthST: -1,
                dexterityST: 2,
                constitutionST: 2,
                intelligenceST: 7,
                wisdomST: 2,
                charismaST: 1
            },
            skills: {
                acrobatics: 2,
                animalHandling: 0,
                arcana: 7,
                athletics: -1,
                deception: 1,
                history: 6,
                insight: 0,
                intimidation: 1,
                investigation: 5,
                medicine: 0,
                nature: 5,
                perception: 2,
                performance: 1,
                persuasion: 1,
                religion: 5,
                slightOfHand: 2,
                stealth: 2,
                survival: 0
            },
            proficiencies: {
                weaponsProf: ['longsword', 'shortsword', 'longbow', 'shortbow', 'quarterstaff'],
                armorProf: ['shield'],
                toolProf: ['calligrapher\'s supplies'],
                languageProf: ['common', 'elvish', 'dwarvish', 'sylvan', 'goblin', 'primordial', 'abyssal', 'draconic']
            },
            traits: ['darkvision', 'keen senses', 'fey ancestry', 'trance'],
            equipment: ['Helm of Comprehending Languages', 'quarterstaff', 'shortsword']
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Parent',
                name: 'Erdan'
            },
            relationship2: {
                status: true,
                type: 'Parent',
                name: 'Leyandra'
            },
            relationship3: {
                status: true,
                type: 'Pibling',
                name: 'Leondartis'
            },
            relationship4: {
                status: true,
                type: 'Cousin',
                name: 'Mindartis'
            }
        }
    },

    {
        _id: '3',
        image: '/images/lark.jpg',
        name: 'Lark',
        firstname: 'Lark',
        nickname: null,
        race: 'air genasi',
        class: 'rogue',
        subclass: null,
        level: 1,
        alignment: 'neutral',
        background: '',
        description: 'Adopted into a human family as a small child, Lark grew up in a well-adjusted home with two loving fathers and a gaggle of other orphans the couple had taken in over the years.  Inquisitive and determined, they picked up lockpicking and trap disarming in a (somewhat futile) effort to avoid the frequent pranks their siblings and the other village children delighted in.  Motivated by a growing wanderlust, Lark has set off from home to find their purpose in life.',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 30,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 1,
                dexModifier: 0,
                constitution: 2,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: ['simple weapons', 'hand crossbows', 'longswords', 'rapiers', 'shortswords'],
                armorProf: ['light armor'],
                toolProf: ['thieves\' tools'],
                languageProf: ['common', 'thieves\' cant']
            },
            traits: ['unending breath', 'mingle with the wind', 'sneak attack'],
            equipment: ['dagger x2', 'shortbow', 'arrows x 20', 'leather armor']
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '4',
        image: '/images/willow.jpg',
        name: 'Willow',
        firstname: 'Willow',
        nickname: null,
        race: 'wood elf',
        class: 'druid',
        subclass: 'circle of the moon',
        level: 4,
        alignment: 'chaotic neutral',
        background: 'outlander',
        description: 'Raised by a small nomadic tribe of wood elves and with a propensity to wander off as a child, Willow grew up semi-feral and is most at home in the wilds.  She finds civilization to be claustrophobic and disconcerting, however after the last of her small family passed away due to an owlbear attack she has been drawn to the nearby villages in an effort to find new companions.',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: ['wanderer', 'darkvision', 'keen senses', 'fey ancestry', 'trance'],
            equipment: ['staff', 'hunting trap', 'animal trophy', 'traveler\'s clothes']
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '5',
        image: '/images/merit.jpg',
        name: 'Merit',
        firstname: 'Merit',
        nickname: 'Merry',
        race: 'tiefling',
        class: 'warlock',
        subclass: null,
        level: 1,
        alignment: 'neutral good',
        background: 'wildling',
        description: 'Orphaned at a young age, Merit grew up in the slums of a small city and turned to petty theft to survive.  However, as they have gotten older and can earn a living through more official channels, they have turned to taking on odd jobs and joining the occasional adventuring party.',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 1,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 2,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: ['darkvision', 'hellish resistance', 'infernal legacy'],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '6',
        image: '/images/thokk.jpg',
        name: 'Thokk Hullbreak',
        firstname: 'Thokk',
        nickname: 'The Dread Pirate Thokk',
        race: 'half-orc',
        class: 'barbarian',
        subclass: null,
        level: 2,
        alignment: 'lawful good',
        background: 'pirate',
        description: 'Thokk grew up as the cabin boy for his father, an infamous pirate.  After reaching adulthood, Thokk took over the ship for a few years until passing on the torch to his younger cousin.  Although he does not advertise his somewhat storied past, Thokk still regularly exchanges letters with his retired father, detailing his adventures as a treasure hunter.',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 2,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 1,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: ['darkvision', 'menacing', 'relentless', 'endurance', 'savage attacks'],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Parent',
                name: 'Krusk'
            },
            relationship2: {
                status: true,
                type: 'Cousin',
                name: 'Sutha'
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '7',
        image: '/images/rex.jpg',
        name: 'Rex',
        firstname: 'Rex',
        nickname: 'Prince of the Western Wilds',
        race: 'human',
        class: '',
        subclass: '',
        level: 0,
        alignment: '',
        background: 'noble',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Parent',
                name: 'Malik'
            },
            relationship2: {
                status: true,
                type: 'Sibling',
                name: 'Reigna'
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '8',
        image: '/images/reigna.jpg',
        name: 'Reigna',
        firstname: 'Reigna',
        nickname: 'Princess of the Western Wilds',
        race: 'human',
        class: '',
        subclass: '',
        level: 0,
        alignment: '',
        background: 'noble',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Parent',
                name: 'Malik'
            },
            relationship2: {
                status: true,
                type: 'Sibling',
                name: 'Rex'
            },
            relationship3: {
                status: true,
                type: 'Partner',
                name: 'Aimi'
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '9',
        image: '/images/lux.jpg',
        name: 'Lux',
        firstname: 'Lux',
        nickname: null,
        race: 'changeling',
        class: '',
        subclass: '',
        level: 0,
        alignment: '',
        background: '',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 30,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 2,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: ['shapechanger', 'unsettling visage', 'divergent persona'],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '10',
        image: '/images/clover.jpg',
        name: 'Clover Fleetfoot',
        firstname: 'Clover',
        nickname: null,
        race: 'halfling',
        class: '',
        subclass: '',
        level: 0,
        alignment: '',
        background: '',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Sibling',
                name: 'Felix'
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '11',
        image: 'images/thia.jpg',
        name: 'Thia',
        firstname: 'Thia',
        nickname: null,
        race: 'high elf',
        class: 'cleric',
        subclass: 'life domain',
        level: 0,
        alignment: 'chaotic good',
        background: '',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '12',
        image: '/images/unitLVI.jpg',
        name: 'unit LVI',
        firstname: 'Levi',
        nickname: 'Levi',
        race: 'warforged',
        class: 'fighter',
        subclass: '',
        level: 0,
        alignment: '',
        background: '',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: true,
                type: 'Forgemate',
                name: 'Lex'
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    }
]

export default characters

/* template for character object

{
        _id: '0',
        image: '',
        name: '',
        nickname: '',
        race: '',
        class: '',
        subclass: '',
        level: 0,
        alignment: '',
        background: '',
        description: '',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 0,
            hitPointMax: 0,
            profBonus: 0,
            inspiration: false,
            vitals: {
                strength: 0,
                strengthModifier: 0,
                dexterity: 0,
                dexModifier: 0,
                constitution: 0,
                constModifier: 0,
                intelligence: 0,
                intelModifier: 0,
                wisdom: 0,
                wisdomModifier: 0,
                charisma: 0,
                charismaModifier: 0
            },
            savingThrows: {
                strengthST: 0,
                dexterityST: 0,
                constitutionST: 0,
                intelligenceST: 0,
                wisdomST: 0,
                charismaST: 0
            },
            skills: {
                acrobatics: 0,
                animalHandling: 0,
                arcana: 0,
                athletics: 0,
                deception: 0,
                history: 0,
                insight: 0,
                intimidation: 0,
                investigation: 0,
                medicine: 0,
                nature: 0,
                perception: 0,
                performance: 0,
                persuasion: 0,
                religion: 0,
                slightOfHand: 0,
                stealth: 0,
                survival: 0
            },
            proficiencies: {
                weaponsProf: [],
                armorProf: [],
                toolProf: [],
                languageProf: []
            },
            traits: [],
            equipment: []
        },
        relationships: {
            relationship1: {
                status: false,
                type: '',
                name: ''
            },
            relationship2: {
                status: false,
                type: '',
                name: ''
            },
            relationship3: {
                status: false,
                type: '',
                name: ''
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    }

    */