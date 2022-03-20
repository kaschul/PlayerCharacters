const characters = [
    {
        id: '_1',
        image: '/images/mindartis.jpg',
        name: 'Mindartis Liadon',
        nickname: 'Mindy',
        race: 'high elf',
        class: 'barbarian',
        subclass: 'eagle totem',
        level: 3,
        alignment: 'neutral',
        background: 'guild artisan',
        description: 'Arrogant and exacting, Mindartis believes that beauty is the meaning of life and conducts himself accordingly.  A couturier and jeweler by trade, he is often mistaken as either a noble or a particularly wealthy and eccentric wizard due to his style choices.  Although seemingly aloof, Mindartis has a quick temper and easily falls into a barbarian rage when insulted.',
        stats: {
            armorClass: 14,
            initiative: 3,
            speed: 30,
            hitPointMax: 29,
            vitals: {
                strength: 15,
                strengthModifier: 2,
                dexterity: 16,
                dexModifier: 3,
                constitution: 13,
                constModifier: 1,
                intelligence: 11,
                intelModifier: 0,
                wisdom: 8,
                wisdomModifier: -1,
                charisma: 12,
                charismaModifier: 1
            },
            savingThrows: {
                strengthST: 4,
                dexterityST: 3,
                constitutionST: 3,
                intelligenceST: 0,
                wisdomST: -1,
                charismaST: 1
            },
            skills: {
                acrobatics: 3,
                animalHandling: -1,
                arcana: 0,
                athletics: 6,
                deception: 1,
                history: 0,
                insight: -1,
                intimidation: 1,
                investigation: 0,
                medicine: -1,
                nature: 2,
                perception: 1,
                performance: 1,
                persuasion: 1,
                religion: 0,
                slightOfHand: 3,
                stealth: 3,
                survival: -1
            },
            proficiencies: {
                weaponsProf: ['longsword', 'shortsword', 'longbow', 'shortbow', 'simple weapons', 'melee weapons'],
                armorProf: ['light armor', 'medium armor', 'shields'],
                languageProf: ['common', 'elvish', 'dwarvish']
            },
            traits: ['darkvision', 'fey ancestry', 'trance', 'unarmored defense', 'rage', 'reckless attack', 'danger sense', 'eagle totem']
        }
    },

    {
        id: '_2',
        image: '/images/enna.jpg',
        name: 'Enna Xiloscient',
        nickname: null,
        race: 'high elf',
        class: 'wizard',
        subclass: 'necromancer',
        level: 0,
        alignment: 'chaotic good',
        background: 'scholar',
        description: 'Enna values knowledge above all else, and easily loses any instinct for self-preservation when faced with the opportunity to learn something new.  She hoards books in the way others hoard gold, and only values wealth insomuch as it can be used to further her studies.',
        stats: {
            armorClass: 0,
            initiative: 0,
            speed: 30,
            hitPointMax: 0,
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
                charismaModifier: 1
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
                weaponsProf: ['longsword', 'shortsword', 'longbow', 'shortbow', 'quarterstaff'],
                armorProf: [],
                languageProf: ['common', 'elvish', 'dwarvish', 'sylvan', 'goblin']
            },
            traits: ['darkvision', 'keen senses', 'fey ancestry', 'trance']
        }
    }
]

export default characters

/* template for character object

{
        id: '_1',
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
                languageProf: []
            },
            traits: []
        }
    }

    */