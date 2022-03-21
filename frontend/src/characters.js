const characters = [
    {
        _id: '1',
        image: '/images/mindartis.jpg',
        name: 'Mindartis Liadon',
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
        }
    },

    {
        _id: '2',
        image: '/images/enna.jpg',
        name: 'Enna Xiloscient',
        nickname: null,
        race: 'high elf',
        class: 'wizard',
        subclass: 'necromancer',
        level: 5,
        alignment: 'chaotic good',
        background: 'scholar',
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
        }
    },

    {
        _id: '3',
        image: '/images/lark.jpg',
        name: 'Lark',
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
        }
    }

    */