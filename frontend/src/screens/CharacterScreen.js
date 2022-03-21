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

      <Card>  {/* Character intro card */}
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
      </Card>  {/* End character intro card */}


      <Card>  {/* Misc character stats card */}
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
      </Card>  {/* end misc character stats card */}

{/* NEW CARD */}

      <Card>  {/* character stats card */}
        <Card.Title as='div'>
          <strong>Character Stats</strong>
        </Card.Title>

        <Card.Text as='div'>
        <div className='my-3'>


        <Row> {/* Row 1 - Column Titles */}
          <Col>
            <></>
          </Col>

          <Col>
            <strong>STATS</strong>
          </Col>

          <Col>
            <strong>MODIFIERS</strong>
          </Col>
          
          <Col>
            <strong>SAVING THROWS</strong>
          </Col>
          
          <Col>
            <strong>SKILLS</strong>
          </Col>
        </Row> {/* End Row 1 - Column Titles */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 2 - Strength */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>STRENGTH:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.strength}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.strengthModifier < 0 ? 
                <> {character.stats.vitals.strengthModifier} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.strengthST}</span>
            </Row>
          </Col>
          
          <Col> {/* Col 5 - Skills (strength - athletics) */}
            <Row>
              <span>Athletics:&nbsp;{character.stats.skills.athletics}</span>
            </Row>
          </Col>

        </Row> {/* End Row 2 - strength */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 3 - Dexterity */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>DEXTERITY:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.dexterity}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.dexModifier < 0 ? 
                <> {character.stats.vitals.dexModifier} </> :
                character.stats.vitals.dexModifier > 0 ?
                <> + {character.stats.vitals.dexModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.dexterityST}</span>
            </Row>
          </Col>

          <Col> {/* Col 5 - Skills (dex - acrobatics, sleight of hand, stealth) */}
            <Row>
              <Col>
                <Row>
                  <span>Acrobatics:&nbsp;{character.stats.skills.acrobatics}</span>
                </Row>
                <Row>
                  <span>Slight of Hand:&nbsp;{character.stats.skills.slightOfHand}</span>
                </Row>
                <Row>
                  <span>Stealth:&nbsp;{character.stats.skills.stealth}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 3 - dexterity */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 4 - Constitution */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>CONSTITUTION:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.constitution}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.constModifier < 0 ? 
                <> {character.stats.vitals.constModifier} </> :
                character.stats.vitals.constModifier > 0 ?
                <> + {character.stats.vitals.constModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.constitutionST}</span>
            </Row>
          </Col>

          <Col> {/* Col 5 - Skills (constitution - none) */}
            <Row>
              <></>
            </Row>
          </Col>

        </Row> {/* End Row 4 - const */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 5 - Intelligence */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>INTELLIGENCE:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.intelligence}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.intelModifier < 0 ? 
                <> {character.stats.vitals.intelModifier} </> :
                character.stats.vitals.intelModifier > 0 ?
                <> + {character.stats.vitals.intelModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.intelligenceST}</span>
            </Row>
          </Col>

          <Col> {/* Col 5 - Skills (intelligence - arcana, history, investigation, nature, religion) */}
            <Row>
              <Col>
                <Row>
                  <span>Arcana:&nbsp;{character.stats.skills.arcana}</span>
                </Row>
                <Row>
                  <span>History:&nbsp;{character.stats.skills.history}</span>
                </Row>
                <Row>
                  <span>Investigation:&nbsp;{character.stats.skills.investigation}</span>
                </Row>
                <Row>
                  <span>Nature:&nbsp;{character.stats.skills.nature}</span>
                </Row>
                <Row>
                  <span>Religion:&nbsp;{character.stats.skills.religion}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 5 - intel */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 6 - Wisdom */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>WISDOM:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.wisdom}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.wisdomModifier < 0 ? 
                <> {character.stats.vitals.wisdomModifier} </> :
                character.stats.vitals.wisdomModifier > 0 ?
                <> + {character.stats.vitals.wisdomModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.wisdomST}</span>
            </Row>
          </Col>

          <Col> {/* Col 5 - Skills (wisdom - animal handling, insight, medicine, perception, survival) */}
            <Row>
              <Col>
                <Row>
                  <span>Animal Handling:&nbsp;{character.stats.skills.animalHandling}</span>
                </Row>
                <Row>
                  <span>Insight:&nbsp;{character.stats.skills.insight}</span>
                </Row>
                <Row>
                  <span>Medicine:&nbsp;{character.stats.skills.medicine}</span>
                </Row>
                <Row>
                  <span>Perception:&nbsp;{character.stats.skills.perception}</span>
                </Row>
                <Row>
                  <span>Survival:&nbsp;{character.stats.skills.survival}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 6 - wisdom */}

{/* ------------------- */}
        <div class='hr'></div>
        <br></br>

        <Row> {/* Row 7 - Charisma */}

          <Col> {/* Col 1 - Stat title */}
            <Row>
              <strong>CHARISMA:</strong>
            </Row>
          </Col>

          <Col> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.charisma}</span>
            </Row>
          </Col>

          <Col> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.charismaModifier < 0 ? 
                <> {character.stats.vitals.charismaModifier} </> :
                character.stats.vitals.charismaModifier > 0 ?
                <> + {character.stats.vitals.charismaModifier} </> :
                <> -- </>})
              </span>
            </Row>
          </Col>

          <Col> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.charismaST}</span>
            </Row>
          </Col>

          <Col> {/* Col 5 - Skills (charisma - deception, intimidation, performance, persuasion) */}
            <Row>
              <Col>
                <Row>
                  <span>Deception:&nbsp;{character.stats.skills.deception}</span>
                </Row>
                <Row>
                  <span>Intimidation:&nbsp;{character.stats.skills.intimidation}</span>
                </Row>
                <Row>
                  <span>Performance:&nbsp;{character.stats.skills.performance}</span>
                </Row>
                <Row>
                  <span>Persuasion:&nbsp;{character.stats.skills.persuasion}</span>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row> {/* End Row 7 - charisma */}
      </div>
      </Card.Text>
    </Card>

{/* ------------------- */}

      <Card>
        <Row>
          <Col>
            <Row><strong>Equipment:</strong></Row>  
            <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row> 
                
            <br></br>
                
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
      </Card>
    </>
  )
}

export default CharacterScreen