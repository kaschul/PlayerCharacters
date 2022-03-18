import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const Stats = ({character}) => {
  return (
    <Card className='my-3 my-3 rounded'>

       <Card.Body>
            <Card.Title as='div'>
                <strong>Character Stats</strong>
            </Card.Title>

            <Card.Text as='div'>
                <div className='my-3'>
                    <Row>
                        <Col>AC: {character.stats.armorClass}</Col>
                        <Col>Initiative: {character.stats.initiative}</Col>
                        <Col>Speed: {character.stats.speed}</Col>
                        <Col>Hit Points: {character.stats.hitPointMax}</Col>
                    </Row>
                    <Col>
                        <Row>Strength: {character.stats.vitals.strength} ({character.stats.vitals.strengthModifier})</Row>
                        <Row>Dexterity: {character.stats.vitals.dexterity} ({character.stats.vitals.dexModifier})</Row>
                        <Row>Constitution: {character.stats.vitals.constitution} ({character.stats.vitals.constModifier})</Row>
                        <Row>Intelligence: {character.stats.vitals.intelligence} ({character.stats.vitals.intelModifier})</Row>
                        <Row>Wisdom: {character.stats.vitals.wisdom} ({character.stats.vitals.wisdomModifier})</Row>
                        <Row>Charisma: {character.stats.vitals.charisma} ({character.stats.vitals.charismaModifier})</Row>
                    </Col>
                    <Row>
                        <span>Saving Throws</span>
                    </Row>
                    <Col>
                        <Row>Strength: {character.stats.savingThrows.strengthST}</Row>
                        <Row>Dexterity: {character.stats.savingThrows.dexterityST}</Row>
                        <Row>Constitution: {character.stats.savingThrows.constitutionST}</Row>
                        <Row>Intelligence: {character.stats.savingThrows.intelligenceST}</Row>
                        <Row>Wisdom: {character.stats.savingThrows.wisdomST}</Row>
                        <Row>Charisma: {character.stats.savingThrows.charismaST}</Row>
                    </Col>
                    <Row>
                        <span>Skills</span>                        
                    </Row>
                    <Col>
                        <Row>Acrobatics: {character.stats.skills.acrobatics}</Row>
                        <Row>Animal Handling: {character.stats.skills.animalHandling}</Row>
                        <Row>Arcana: {character.stats.skills.arcana}</Row>
                        <Row>Athletics: {character.stats.skills.athletics}</Row>
                        <Row>Deception: {character.stats.skills.deception}</Row>
                        <Row>History: {character.stats.skills.history}</Row>
                        <Row>Insight: {character.stats.skills.insight}</Row>
                        <Row>Intimidation: {character.stats.skills.intimidation}</Row>
                        <Row>Investigation: {character.stats.skills.investigation}</Row>
                        <Row>Medicine: {character.stats.skills.medicine}</Row>
                        <Row>Nature: {character.stats.skills.nature}</Row>
                        <Row>Perception: {character.stats.skills.perception}</Row>
                        <Row>Performance: {character.stats.skills.performance}</Row>
                        <Row>Persuasion: {character.stats.skills.persuasion}</Row>
                        <Row>Religion: {character.stats.skills.religion}</Row>
                        <Row>Slight of Hand: {character.stats.skills.slightOfHand}</Row>
                        <Row>Stealth: {character.stats.skills.stealth}</Row>
                        <Row>Survival: {character.stats.skills.survival}</Row>
                    </Col>
                    <Row>
                        <span>Proficiencies and Languages</span>
                    </Row>
                    <Col>
                        <Row>{character.stats.proficiencies.weaponsProf.map((p) => " " + p)}</Row>
                        <Row>{character.stats.proficiencies.armorProf.map((p) => " " + p)}</Row>
                        <Row>{character.stats.proficiencies.languageProf.map((p) => " " + p)}</Row>
                    </Col>
                    <Row>
                        <span>Features and Traits</span>
                    </Row>
                    <Col>
                        <Row>{character.stats.proficiencies.weaponsProf.map((p) => " " + p)}</Row>
                        <Row>{character.stats.proficiencies.armorProf.map((p) => " " + p)}</Row>
                        <Row>{character.stats.proficiencies.languageProf.map((p) => " " + p)}</Row>
                    </Col>
                </div>
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Stats

