const characters = [
    {
        id: '_1',
        image: '',
        name: 'Mindartis Liadon',
        nickname: 'Mindy',
        race: 'high elf',
        class: 'barbarian',
        level: 3,
        alighnment: 'neutral',
        background: 'guild artisan',
        description: '',
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
    }
]

export default characters