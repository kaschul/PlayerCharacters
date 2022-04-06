const npcs = [
    {
        _id: '1',
        image: '/images/npcs/theirastra.jpg',
        name: 'Theirastra Siannodel Liadon',
        nickname: "Astra",
        race: 'high elf',
        class: 'barbarian',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'artist',
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
                type: 'Child',
                name: 'Mindartis'
            },
            relationship2: {
                status: true,
                type: 'Spouse',
                name: 'Leondartis'
            },
            relationship3: {
                status: true,
                type: 'Nibling',
                name: 'Enna'
            },
            relationship4: {
                status: false,
                type: '',
                name: ''
            }
        }
    },

    {
        _id: '2',
        image: '/images/npcs/leondartis.jpg',
        name: 'Leondartis Liadon',
        nickname: 'Leon',
        race: 'high elf',
        class: 'bard',
        subclass: '',
        level: 0,
        alignment: 'chaotic good',
        background: 'guild artisan',
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
                type: 'Child',
                name: 'Mindartis'
            },
            relationship2: {
                status: true,
                type: 'Spouse',
                name: 'Theirastra'
            },
            relationship3: {
                status: true,
                type: 'Sibling',
                name: 'Leyandra'
            },
            relationship4: {
                status: true,
                type: 'Nibling',
                name: 'Enna'
            }
        }
    },

    {
        _id: '3',
        image: '/images/npcs/leyandra.jpg',
        name: 'Leyandra Liadon Xiloscient',
        nickname: 'Andy',
        race: 'high elf',
        class: 'healer',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'acolyte',
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
                type: 'Child',
                name: 'Enna'
            },
            relationship2: {
                status: true,
                type: 'Spouse',
                name: 'Erdan'
            },
            relationship3: {
                status: true,
                type: 'Sibling',
                name: 'Leondartis'
            },
            relationship4: {
                status: true,
                type: 'Nibling',
                name: 'Mindartis'
            }
        }
    },

    {
        _id: '4',
        image: '/images/npcs/erdan.jpg',
        name: 'Erdan Xiloscient',
        nickname: 'Andy',
        race: 'high elf',
        class: 'wizard',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'scholar',
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
                type: 'Child',
                name: 'Enna'
            },
            relationship2: {
                status: true,
                type: 'Spouse',
                name: 'Leyandra'
            },
            relationship3: {
                status: true,
                type: 'Nibling',
                name: 'Mindartis'
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
        image: '/images/npcs/kennmi.jpg',
        name: 'Kennmi',
        nickname: 'Ken',
        race: 'human',
        class: 'fighter',
        subclass: '',
        level: 0,
        alignment: 'lawful good',
        background: 'knight',
        description: 'Captain of the Guard, serving under King Malik',
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
        _id: '6',
        image: '/images/npcs/malik.jpg',
        name: 'Malik',
        nickname: null,
        race: 'human',
        class: 'fighter',
        subclass: '',
        level: 0,
        alignment: 'lawful good',
        background: 'noble',
        description: 'King of the West and father of Rex and Regina, Malik is used to lots of responsibility and very little free time.',
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
                type: 'Child',
                name: 'Reigna'
            },
            relationship2: {
                status: true,
                type: 'Child',
                name: 'Rex'
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
        image: '/images/npcs/xuto.jpg',
        name: 'Li Xuto',
        nickname: null,
        race: 'half-elf',
        class: 'rogue',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'spy',
        description: 'Spymaster for King Malik and Captain Kennmi.',
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
        _id: '8',
        image: '/images/npcs/aimi.jpg',
        name: 'Kato Aimi',
        nickname: 'Wisteria',
        race: 'changeling',
        class: 'warlock',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'noble',
        description: 'Princess of the Eastern Isles and heir apparent to the throne, Aimi is currently engaged to Princess Reigna.',
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
                type: 'Partner',
                name: 'Reigna'
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
        _id: '9',
        image: '/images/npcs/sutha.jpg',
        name: 'Sutha',
        nickname: 'The Dread Pirate Sutha',
        race: 'half-orc',
        class: 'barbarian',
        subclass: '',
        level: 0,
        alignment: '',
        background: 'pirate',
        description: 'Sutha grew up serving under her uncle Krusk, then under her older cousin Thokk.  Now she is the captain of the ship.',
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
                type: 'Cousin',
                name: 'Thokk'
            },
            relationship2: {
                status: true,
                type: 'Pibling',
                name: 'Krusk'
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
        image: '/images/npcs/krusk.jpg',
        name: 'Krusk',
        nickname: 'The Dread Pirate Krusk',
        race: 'half-orc',
        class: 'warrior',
        subclass: '',
        level: 0,
        alignment: '',
        background: 'pirate',
        description: 'Once the Dread Pirate Krusk of the South Seas, now retired and enjoying a leisurly life as a (not particularly talented) artist.',
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
                type: 'Child',
                name: 'Thokk'
            },
            relationship2: {
                status: true,
                type: 'Nibling',
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
        _id: '11',
        image: '/images/npcs/felix.jpg',
        name: 'Felix',
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
                name: 'Clover'
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
        image: '/images/npcs/ivy.jpg',
        name: 'Ivy',
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
        _id: '13',
        image: '/images/npcs/unitLX.jpg',
        name: 'unit LX',
        nickname: 'Lex',
        race: 'warforged',
        class: 'fighter',
        subclass: '',
        level: 0,
        alignment: 'neutral',
        background: 'soldier',
        description: 'Forged in the same batch as unit LVI, unit LX is a battle-hardened warrior with a tendency to question orders.',
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
        _id: '14',
        image: '/images/npcs/petrichor.jpg',
        name: 'Petrichor',
        nickname: 'Rik',
        race: 'human',
        class: 'ranger',
        subclass: '',
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
        _id: '15',
        image: '/images/npcs/ruriana.jpg',
        name: 'Ruriana',
        nickname: 'Rori',
        race: 'human',
        class: 'wizard',
        subclass: '',
        level: 0,
        alignment: 'chaotic good',
        background: 'scholar',
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
        _id: '16',
        image: '/images/npcs/delvin.jpg',
        name: 'Delvin',
        nickname: null,
        race: 'wood elf',
        class: 'bard',
        subclass: '',
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
    }


    
    
   
]

export default npcs

/* template for character object

{
        _id: '0',
        image: '/images/npcs/',
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