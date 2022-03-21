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
              <br></br>
              <Row>
                <span>{character.race} - {character.alignment}</span>
              </Row>
              <Row>
                {/* character subclass only displayed if not null */}
                <span>Lvl {character.level} {character.class} {character.subclass != null && <>- {character.subclass}</>}</span>
              </Row>
              <Row>
                <span>{character.background}</span>
              </Row>
              <br></br>
              <Row>
                <p> {character.description} </p>
              </Row>
          </Col>
        </Row>
      </Card>

      <Card>
        <Card.Title as='div'>
          <strong>Character Stats</strong>
        </Card.Title>

        <Card.Text as='div'>
        <div className='my-3'>

        <Row>

          <Col>
              {/*displays value, (modifier) 
              + modifier if > 0, 
              - modifier if < 0, and 
              -- if modifier == 0*/} 
            <Row>
              <span><strong>Strength:</strong> 
              &nbsp;{character.stats.vitals.strength} 
              &nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> {character.stats.vitals.strengthModifier} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span>
            </Row>
            <Row>
              <span><strong>Dexterity:</strong> 
              &nbsp;{character.stats.vitals.dexterity} 
              &nbsp;({character.stats.vitals.dexModifier < 0 ? 
                <> {character.stats.vitals.dexModifier} </> : 
                character.stats.vitals.dexModifier > 0 ?
                <> + {character.stats.vitals.dexModifier} </> :
                <> -- </>})</span>
            </Row>
            <Row >
              <span><strong>Constitution:</strong>
              &nbsp;{character.stats.vitals.constitution} 
              &nbsp;({character.stats.vitals.constModifier < 0 ? 
                <> {character.stats.vitals.constModifier} </> :
                character.stats.vitals.constModifier > 0 ? 
                <> + {character.stats.vitals.constModifier} </> :
                <> -- </>})</span>
            </Row>
            <Row>
              <span><strong>Intelligence:</strong>
              &nbsp;{character.stats.vitals.intelligence} 
              &nbsp;({character.stats.vitals.intelModifier < 0 ? 
                <> {character.stats.vitals.intelModifier} </> : 
                character.stats.vitals.intelModifier > 0 ?
                <> + {character.stats.vitals.intelModifier} </> :
                <> -- </>})</span>
            </Row>
            <Row>
              <span><strong>Wisdom:</strong>
              &nbsp;{character.stats.vitals.wisdom} 
              &nbsp;({character.stats.vitals.wisdomModifier < 0 ? 
                <> {character.stats.vitals.wisdomModifier} </> : 
                character.stats.vitals.wisdomModifier > 0 ?
                <> + {character.stats.vitals.wisdomModifier} </> :
                <> -- </>})</span>
            </Row>
            <Row>
              <span><strong>Charisma:</strong> 
              &nbsp;{character.stats.vitals.charisma} 
              &nbsp;({character.stats.vitals.charismaModifier < 0 ? 
                <> {character.stats.vitals.charismaModifier} </> : 
                character.stats.vitals.charismaModifier > 0 ?
                <> + {character.stats.vitals.charismaModifier} </> :
                <> -- </>})</span>
            </Row>
            <br></br>
            <Row>
                <Col>
                  <Row><strong>Saving Throws:</strong></Row>
                  <Row><span>Strength:&nbsp;{character.stats.savingThrows.strengthST}</span></Row>
                  <Row><span>Dexterity:&nbsp;{character.stats.savingThrows.dexterityST}</span></Row>
                  <Row><span>Constitution:&nbsp;{character.stats.savingThrows.constitutionST}</span></Row>
                  <Row><span>Intelligence:&nbsp;{character.stats.savingThrows.intelligenceST}</span></Row>
                  <Row><span>Wisdom:&nbsp;{character.stats.savingThrows.wisdomST}</span></Row>
                  <Row><span>Charisma:&nbsp;{character.stats.savingThrows.charismaST}</span></Row>
                </Col>
            </Row>
          </Col>
          
          <Col>
          
            <Row>
              <Col>
                  <Row><strong>AC:</strong></Row>
                  <Row><span>{character.stats.armorClass}</span></Row>
                  
                  <br></br>

                  <Row><strong>Initiative:</strong></Row>
                  <Row><span>{character.stats.initiative}</span></Row>

                  <br></br>

                  <Row><strong>Speed:</strong></Row>
                  <Row><span>{character.stats.speed} ft</span></Row>
              </Col>
              <Col>
                  <Row><strong>Hit Points:</strong></Row>
                  <Row><span>{character.stats.hitPointMax}</span></Row>
                  
                  <br></br>

                  <Row><strong>Proficiency Bonus:</strong></Row>
                  <Row><span>{character.stats.profBonus}</span></Row>
                  
                  <br></br>

                  <Row><strong>Inspiration:</strong></Row>
                  <Row><span>{character.inspiration === true ? <div>'YES'</div> : <div>'NO'</div>}</span></Row>
              </Col>
            </Row>

            <Row>
              <Col>
                <Row><strong>Equipment:</strong></Row>  
                <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row>
              </Col>
            </Row>

          </Col>

          <Col>
            <Row>
                <Col>
                  <Row><strong>Skills:</strong></Row>
                  <Row><span>Acrobatics:&nbsp;{character.stats.skills.acrobatics}</span></Row>
                  <Row><span>Animal Handling:&nbsp;{character.stats.skills.animalHandling}</span></Row>
                  <Row><span>Arcana:&nbsp;{character.stats.skills.arcana}</span></Row>
                  <Row><span>Athletics:&nbsp;{character.stats.skills.athletics}</span></Row>
                  <Row><span>Deception:&nbsp;{character.stats.skills.deception}</span></Row>
                  <Row><span>History:&nbsp;{character.stats.skills.history}</span></Row>
                  <Row><span>Insight:&nbsp;{character.stats.skills.insight}</span></Row>
                  <Row><span>Intimidation:&nbsp;{character.stats.skills.intimidation}</span></Row>
                  <Row><span>Investigation:&nbsp;{character.stats.skills.investigation}</span></Row>
                  <Row><span>Medicine:&nbsp;{character.stats.skills.medicine}</span></Row>
                  <Row><span>Nature:&nbsp;{character.stats.skills.nature}</span></Row>
                  <Row><span>Perception:&nbsp;{character.stats.skills.perception}</span></Row>
                  <Row><span>Performance:&nbsp;{character.stats.skills.performance}</span></Row>
                  <Row><span>Persuasion:&nbsp;{character.stats.skills.persuasion}</span></Row>
                  <Row><span>Religion:&nbsp;{character.stats.skills.religion}</span></Row>
                  <Row><span>Slight of Hand:&nbsp;{character.stats.skills.slightOfHand}</span></Row>
                  <Row><span>Stealth:&nbsp;{character.stats.skills.stealth}</span></Row>
                  <Row><span>Survival:&nbsp;{character.stats.skills.survival}</span></Row>
                </Col>
            </Row>
          </Col>
        </Row>

        <br></br>
        
        <Row>
          <Col>
            
            <Row><strong>Proficiencies and Languages:</strong></Row>
            <Row>
              <Col>
                <Row><span>{character.stats.proficiencies.weaponsProf.map((p) => " [" + p + "] ")}</span></Row>
                <Row><span>{character.stats.proficiencies.armorProf.map((p) => " [" + p + "] ")}</span></Row>
                <Row><span>{character.stats.proficiencies.toolProf.map((p) => " [" + p + "] ")}</span></Row>
                <Row><span>{character.stats.proficiencies.languageProf.map((p) => " [" + p + "] ")}</span></Row>
              </Col>
            </Row>
              
            <br></br>
              
            <Row><strong>Features and Traits:</strong></Row>
            <Row><span>{character.stats.traits.map((p) => " [" + p + "] ")}</span></Row>

          </Col>
        </Row>
        </div>
        </Card.Text>
      </Card>
    </>
  )
}

export default CharacterScreen