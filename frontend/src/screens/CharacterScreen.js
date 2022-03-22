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
              
              <Row>  {/* Misc character stats  */}
                <Col class='align-items-center'>
          
                  <Row><strong class='text-center'>Armor Class:</strong></Row>
                  <Row><span class='text-center'>{character.stats.armorClass}</span></Row>
               
                  <br></br>

                  <Row><strong class='text-center'>Initiative:</strong></Row>
                  <Row><span class='text-center'>{character.stats.initiative}</span></Row>

                  <br></br>

                  <Row><strong class='text-center'>Speed:</strong></Row>
                  <Row><span class='text-center'>{character.stats.speed} ft</span></Row>
            
                </Col>
                <Col class='align-items-center'>

                  <Row><strong class='text-center'>Hit Points:</strong></Row>
                  <Row><span class='text-center'>{character.stats.hitPointMax}</span></Row>
               
                  <br></br>

                  <Row><strong class='text-center'>Proficiency Bonus:</strong></Row>
                  <Row><span class='text-center'>{character.stats.profBonus}</span></Row>
                  
                  <br></br>

                  <Row><strong class='text-center'>Inspiration:</strong></Row>
                  <Row><span class='text-center'>{character.inspiration === true ? <div>'YES'</div> : <div>'NO'</div>}</span></Row>
                </Col>
              </Row>  {/* end misc character stats  */}
          </Col>
        </Row>
      </Card>  {/* End character intro card */}

{/* NEW CARD */}

      <Card>  {/* character stats card */}
      <Row>
      <Col xs={6}>
        <Row> {/* Row 1 - Column Titles */}
            <Col xs={2}></Col>
            <Col xs={9}>
            <span>
            <strong>STATS</strong>
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <strong>(MODIFIERS)</strong>
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <strong>SAVING THROWS</strong>
            &nbsp;&nbsp;-&nbsp;&nbsp;
            <strong>SKILLS</strong>
            </span>
            </Col>
        </Row> {/* End Row 1 - Column Titles */}

{/* ------------------- */}
        
        <br></br>

        <Row> {/* Row 2 - Strength */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>STRENGTH:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.strength}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.strengthST}</span>
            </Row>
          </Col>
          
          <Col xs={4}> {/* Col 5 - Skills (strength - athletics) */}
            <Row>
              <span>Athletics:&nbsp;&nbsp;{character.stats.skills.athletics}</span>
            </Row>
          </Col>

        </Row> {/* End Row 2 - strength */}

{/* ------------------- */}
  
        <hr/>

        <Row> {/* Row 3 - Dexterity */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>DEXTERITY:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.dexterity}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.dexterityST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (dex - acrobatics, sleight of hand, stealth) */}
            <Row>
              <Col>
                <Row>
                  <span>Acrobatics:&nbsp;&nbsp;{character.stats.skills.acrobatics}</span>
                </Row>
                <Row>
                  <span>Slight of Hand:&nbsp;&nbsp;{character.stats.skills.slightOfHand}</span>
                </Row>
                <Row>
                  <span>Stealth:&nbsp;&nbsp;{character.stats.skills.stealth}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 3 - dexterity */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 4 - Constitution */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>CONSTITUTION:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.constitution}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.constitutionST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (constitution - none) */}
            <Row>
              <></>
            </Row>
          </Col>

        </Row> {/* End Row 4 - const */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 5 - Intelligence */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>INTELLIGENCE:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.intelligence}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.intelligenceST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (intelligence - arcana, history, investigation, nature, religion) */}
            <Row>
              <Col>
                <Row>
                  <span>Arcana:&nbsp;&nbsp;{character.stats.skills.arcana}</span>
                </Row>
                <Row>
                  <span>History:&nbsp;&nbsp;{character.stats.skills.history}</span>
                </Row>
                <Row>
                  <span>Investigation:&nbsp;&nbsp;{character.stats.skills.investigation}</span>
                </Row>
                <Row>
                  <span>Nature:&nbsp;&nbsp;{character.stats.skills.nature}</span>
                </Row>
                <Row>
                  <span>Religion:&nbsp;&nbsp;{character.stats.skills.religion}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 5 - intel */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 6 - Wisdom */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>WISDOM:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.wisdom}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.wisdomST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (wisdom - animal handling, insight, medicine, perception, survival) */}
            <Row>
              <Col>
                <Row>
                  <span>Animal Handling:&nbsp;&nbsp;{character.stats.skills.animalHandling}</span>
                </Row>
                <Row>
                  <span>Insight:&nbsp;&nbsp;{character.stats.skills.insight}</span>
                </Row>
                <Row>
                  <span>Medicine:&nbsp;&nbsp;{character.stats.skills.medicine}</span>
                </Row>
                <Row>
                  <span>Perception:&nbsp;&nbsp;{character.stats.skills.perception}</span>
                </Row>
                <Row>
                  <span>Survival:&nbsp;&nbsp;{character.stats.skills.survival}</span>
                </Row>
              </Col>
            </Row>
          </Col>

        </Row> {/* End Row 6 - wisdom */}

{/* ------------------- */}
        
        <hr/>

        <Row> {/* Row 7 - Charisma */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong>CHARISMA:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span>{character.stats.vitals.charisma}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
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

          <Col xs={2}> {/* Col 4 - Saving Throws */}
            <Row>
              <span>{character.stats.savingThrows.charismaST}</span>
            </Row>
          </Col>

          <Col xs={4}> {/* Col 5 - Skills (charisma - deception, intimidation, performance, persuasion) */}
            <Row>
              <Col>
                <Row>
                  <span>Deception:&nbsp;&nbsp;{character.stats.skills.deception}</span>
                </Row>
                <Row>
                  <span>Intimidation:&nbsp;&nbsp;{character.stats.skills.intimidation}</span>
                </Row>
                <Row>
                  <span>Performance:&nbsp;&nbsp;{character.stats.skills.performance}</span>
                </Row>
                <Row>
                  <span>Persuasion:&nbsp;&nbsp;{character.stats.skills.persuasion}</span>
                </Row>
                <br></br>
              </Col>
            </Row>
          </Col>
        </Row> {/* End Row 7 - charisma */}
    </Col>


    <Col md={6}>


      <br></br>

      <Row><strong>EQUIPMENT:</strong></Row> 
      <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row> 

      <br></br>
      <br></br>
                
      <Row><strong>PROFICIENCIES:</strong></Row>
      <Row>
        <Col>
          <Row><span>{character.stats.proficiencies.weaponsProf.map((p) => " [" + p + "] ")}</span></Row>
          <Row><span>{character.stats.proficiencies.armorProf.map((p) => " [" + p + "] ")}</span></Row>
          <Row><span>{character.stats.proficiencies.toolProf.map((p) => " [" + p + "] ")}</span></Row>
        </Col>
      </Row>

      <br></br>
      <br></br>

      <Row><strong>LANGUAGES:</strong></Row>
      <Row><span>{character.stats.proficiencies.languageProf.map((p) => " [" + p + "] ")}</span></Row>

      <br></br>
      <br></br>

      <Row><strong>FEATURES & TRAITS:</strong></Row>
      <Row><span>{character.stats.traits.map((p) => " [" + p + "] ")}</span></Row>

      <br></br>
        
    </Col>
    </Row>
    </Card>
    </>
  )
}

export default CharacterScreen