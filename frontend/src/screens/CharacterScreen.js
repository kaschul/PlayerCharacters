import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import characters from '../characters';

const CharacterScreen = () => {
  const params = useParams();

  const character = characters.find((p) => p._id === params.id)
  return(
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Card>
        <Row>
          <Col md={6}>
            <Image src={character.image} alt={character.name} fluid />
          </Col>
          <Col>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <span><h3>{character.name}</h3> {character.nickname != null && <div> ({character.nickname}) </div>}</span>
              </ListGroup.Item>
              <ListGroup.Item>
                {character.race} - {character.alignment}
              </ListGroup.Item>
              <ListGroup.Item>
                {/* character subclass only displayed if not null */}
                Lvl {character.level} {character.class} {character.subclass != null && <div> - {character.subclass}</div>}
              </ListGroup.Item>
              <ListGroup.Item>
                {character.background}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <p> {character.description} </p>
        </Row>
      </Card>

      <Card>
        <Card.Title as='div'>
          <strong>Character Stats</strong>
        </Card.Title>

        <Card.Text as='div'>
        <div className='my-3'>
          <Col class='text-centered'>
              {/*displays value, (modifier) 
              + modifier if > 0, 
              - modifier if < 0, and 
              -- if modifier == 0*/} 
            <Row>
              <strong>Strength:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.strength} 
              ({character.stats.vitals.strengthModifier < 0 ? 
                <div> - {character.stats.vitals.strengthModifier} </div> :
                character.stats.vitals.strengthModifier > 0 ?
                <div> + {character.stats.vitals.strengthModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              <strong>Dexterity:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.dexterity} 
              ({character.stats.vitals.dexModifier < 0 ? 
                <div> - {character.stats.vitals.dexModifier} </div> : 
                character.stats.vitals.dexModifier > 0 ?
                <div> + {character.stats.vitals.dexModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row >
              <strong>Constitution:</strong>
            </Row>
            <Row>
              {character.stats.vitals.constitution} 
              ({character.stats.vitals.constModifier < 0 ? 
                <div> - {character.stats.vitals.constModifier} </div> :
                character.stats.vitals.constModifier > 0 ? 
                <div> + {character.stats.vitals.constModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              <strong>Intelligence:</strong>
            </Row>
            <Row>
              {character.stats.vitals.intelligence} 
              ({character.stats.vitals.intelModifier < 0 ? 
                <div> - {character.stats.vitals.intelModifier} </div> : 
                character.stats.vitals.intelModifier > 0 ?
                <div> + {character.stats.vitals.intelModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              <strong>Wisdom:</strong>
            </Row>
            <Row>
              {character.stats.vitals.wisdom} 
              ({character.stats.vitals.wisdomModifier < 0 ? 
                <div> - {character.stats.vitals.wisdomModifier} </div> : 
                character.stats.vitals.wisdomModifier > 0 ?
                <div> + {character.stats.vitals.wisdomModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              <strong>Charisma:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.charisma} 
              ({character.stats.vitals.charismaModifier < 0 ? 
                <div> - {character.stats.vitals.charismaModifier} </div> : 
                character.stats.vitals.charismaModifier > 0 ?
                <div> + {character.stats.vitals.charismaModifier} </div> :
                <div> -- </div>})
            </Row>
          </Col>
          <Col>
            <Row>
                <Col>
                  <Row><strong>Saving Throws:</strong></Row>
                  <Row>Strength: {character.stats.savingThrows.strengthST}</Row>
                  <Row>Dexterity: {character.stats.savingThrows.dexterityST}</Row>
                  <Row>Constitution: {character.stats.savingThrows.constitutionST}</Row>
                  <Row>Intelligence: {character.stats.savingThrows.intelligenceST}</Row>
                  <Row>Wisdom: {character.stats.savingThrows.wisdomST}</Row>
                  <Row>Charisma: {character.stats.savingThrows.charismaST}</Row>
                </Col>
            </Row>
            <Row>
                <Col>
                  <Row><strong>Skills:</strong></Row>
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
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <Row><strong>AC:</strong></Row>
                <Row>{character.stats.armorClass}</Row>
              </Col>
              <Col>
                <Row><strong>Initiative:</strong></Row>
                <Row>{character.stats.initiative}</Row>
              </Col>
              <Col>
                <Row><strong>Speed:</strong></Row>
                <Row>{character.stats.speed}</Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row><strong>Hit Point Max:</strong></Row>
                <Row>{character.stats.hitPointMax}</Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row><strong>Proficiencies and Languages:</strong></Row>
                <Row>
                  <Col>
                    <Row>{character.stats.proficiencies.weaponsProf.map((p) => " [" + p + "] ")}</Row>
                    <Row>{character.stats.proficiencies.armorProf.map((p) => " [" + p + "] ")}</Row>
                    <Row>{character.stats.proficiencies.languageProf.map((p) => " [" + p + "] ")}</Row>
                  </Col>
                </Row>
                <Row><strong>Features and Traits:</strong></Row>
                <Row>
                  <Col>
                    <Row>{character.stats.traits.map((p) => " [" + p + "] ")}</Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </div>
        </Card.Text>
      </Card>
    </>
  )
}

export default CharacterScreen