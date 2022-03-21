import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card } from 'react-bootstrap'
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
              <Row>
                <span><h3>{character.name}</h3> {character.nickname != null && <>(aka {character.nickname})</>}</span>
              </Row>
              <Row>
                {character.race} - {character.alignment}
              </Row>
              <Row>
                {/* character subclass only displayed if not null */}
                <span>Lvl {character.level} {character.class} {character.subclass != null && <>- {character.subclass}</>}</span>
              </Row>
              <Row>
                {character.background}
              </Row>
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
            <div id='vitals'>
            <Row>
              <strong>Strength:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.strength} 
              &nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> {character.stats.vitals.strengthModifier} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})
            </Row>
            <Row>
              <strong>Dexterity:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.dexterity} 
              &nbsp;({character.stats.vitals.dexModifier < 0 ? 
                <> {character.stats.vitals.dexModifier} </> : 
                character.stats.vitals.dexModifier > 0 ?
                <> + {character.stats.vitals.dexModifier} </> :
                <> -- </>})
            </Row>
            <Row >
              <strong>Constitution:</strong>
            </Row>
            <Row>
              {character.stats.vitals.constitution} 
              &nbsp;({character.stats.vitals.constModifier < 0 ? 
                <> {character.stats.vitals.constModifier} </> :
                character.stats.vitals.constModifier > 0 ? 
                <> + {character.stats.vitals.constModifier} </> :
                <> -- </>})
            </Row>
            <Row>
              <strong>Intelligence:</strong>
            </Row>
            <Row>
              {character.stats.vitals.intelligence} 
              &nbsp;({character.stats.vitals.intelModifier < 0 ? 
                <> {character.stats.vitals.intelModifier} </> : 
                character.stats.vitals.intelModifier > 0 ?
                <> + {character.stats.vitals.intelModifier} </> :
                <> -- </>})
            </Row>
            <Row>
              <strong>Wisdom:</strong>
            </Row>
            <Row>
              {character.stats.vitals.wisdom} 
              &nbsp;({character.stats.vitals.wisdomModifier < 0 ? 
                <> {character.stats.vitals.wisdomModifier} </> : 
                character.stats.vitals.wisdomModifier > 0 ?
                <> + {character.stats.vitals.wisdomModifier} </> :
                <> -- </>})
            </Row>
            <Row>
              <strong>Charisma:</strong> 
            </Row>
            <Row>
              {character.stats.vitals.charisma} 
              &nbsp;({character.stats.vitals.charismaModifier < 0 ? 
                <> {character.stats.vitals.charismaModifier} </> : 
                character.stats.vitals.charismaModifier > 0 ?
                <> + {character.stats.vitals.charismaModifier} </> :
                <> -- </>})
            </Row>
            </div>
          </Col>
          <Col>
            <div id='savingThrows'>
            <Row>
                <Col>
                  <Row><strong>Saving Throws:</strong></Row>
                  <Row>Strength:&nbsp;{character.stats.savingThrows.strengthST}</Row>
                  <Row>Dexterity:&nbsp;{character.stats.savingThrows.dexterityST}</Row>
                  <Row>Constitution:&nbsp;{character.stats.savingThrows.constitutionST}</Row>
                  <Row>Intelligence:&nbsp;{character.stats.savingThrows.intelligenceST}</Row>
                  <Row>Wisdom:&nbsp;{character.stats.savingThrows.wisdomST}</Row>
                  <Row>Charisma:&nbsp;{character.stats.savingThrows.charismaST}</Row>
                </Col>
            </Row>
            </div>
            <br></br>
            <div id='skills'>
            <Row>
                <Col>
                  <Row><strong>Skills:</strong></Row>
                  <Row>Acrobatics:&nbsp;{character.stats.skills.acrobatics}</Row>
                  <Row>Animal Handling:&nbsp;{character.stats.skills.animalHandling}</Row>
                  <Row>Arcana:&nbsp;{character.stats.skills.arcana}</Row>
                  <Row>Athletics:&nbsp;{character.stats.skills.athletics}</Row>
                  <Row>Deception:&nbsp;{character.stats.skills.deception}</Row>
                  <Row>History:&nbsp;{character.stats.skills.history}</Row>
                  <Row>Insight:&nbsp;{character.stats.skills.insight}</Row>
                  <Row>Intimidation:&nbsp;{character.stats.skills.intimidation}</Row>
                  <Row>Investigation:&nbsp;{character.stats.skills.investigation}</Row>
                  <Row>Medicine:&nbsp;{character.stats.skills.medicine}</Row>
                  <Row>Nature:&nbsp;{character.stats.skills.nature}</Row>
                  <Row>Perception:&nbsp;{character.stats.skills.perception}</Row>
                  <Row>Performance:&nbsp;{character.stats.skills.performance}</Row>
                  <Row>Persuasion:&nbsp;{character.stats.skills.persuasion}</Row>
                  <Row>Religion:&nbsp;{character.stats.skills.religion}</Row>
                  <Row>Slight of Hand:&nbsp;{character.stats.skills.slightOfHand}</Row>
                  <Row>Stealth:&nbsp;{character.stats.skills.stealth}</Row>
                  <Row>Survival:&nbsp;{character.stats.skills.survival}</Row>
                </Col>
            </Row>
            </div>
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
                <Row>{character.stats.speed} ft</Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row><strong>Hit Points:</strong></Row>
                <Row>{character.stats.hitPointMax}</Row>
              </Col>
              <Col>
                <Row><strong>Proficiency Bonus:</strong></Row>
                <Row>{character.stats.profBonus}</Row>
              </Col>
              <Col>
                <Row><strong>Inspiration:</strong></Row>
                <Row>{character.inspiration === true ? <div>'YES'</div> : <div>'NO'</div>}</Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Row><strong>Proficiencies and Languages:</strong></Row>
                <Row>
                  <Col>
                    <Row>{character.stats.proficiencies.weaponsProf.map((p) => " [" + p + "] ")}</Row>
                    <Row>{character.stats.proficiencies.armorProf.map((p) => " [" + p + "] ")}</Row>
                    <Row>{character.stats.proficiencies.toolProf.map((p) => " [" + p + "] ")}</Row>
                    <Row>{character.stats.proficiencies.languageProf.map((p) => " [" + p + "] ")}</Row>
                  </Col>
                </Row>
                <Row><strong>Features and Traits:</strong></Row>
                <Row>{character.stats.traits.map((p) => " [" + p + "] ")}</Row>
                <Row><strong>Equipment:</strong></Row>  
                <Row>{character.stats.equipment.map((p) => " [" + p + "] ")}</Row>
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