import mongoose from 'mongoose';

const characterSchema = mongoose.Schema({
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
})