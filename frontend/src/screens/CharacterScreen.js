import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card, Container } from 'react-bootstrap'
import characters from '../characters';

const CharacterScreen = () => {
 
  const params = useParams();

  const character = characters.find((p) => p._id === params.id)
  return(
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      <Container>
      <Row xs={1} md={2} className="g-4">  {/* start card grid */}
      <Col>




{/* NEW CARD */}
      <Card>  {/* Character intro card */}
        <Row>
          <Col>
            <Image src={character.image} alt={character.name} fluid />
          </Col>
        </Row>
      </Card>




{/* NEW CARD */}

<Card body>
        <Row>          
          <Col>
            <Row>  {/* character nickname only displayed if not null */}
              <span><h3>{character.name}</h3> {character.nickname != null && <>(aka {character.nickname})</>}</span>
            </Row>

            <br></br>

            <Row>
              <span>{character.race} - {character.alignment}</span>
            </Row>
            <Row>  {/* character subclass only displayed if not null */}
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
              <Col sm={2}></Col>
              <Col sm={4} class='align-items-center'>
          
                <Row><strong class='text-center'><i className='fa-solid fa-shield'></i> Armor Class:</strong></Row>
                <Row><span class='text-center'>{character.stats.armorClass}</span></Row>
               
                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-forward'></i> Initiative:</strong></Row>
                <Row><span class='text-center'>{character.stats.initiative}</span></Row>

                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-person-walking'></i> Speed:</strong></Row>
                <Row><span class='text-center'>{character.stats.speed} ft</span></Row>
            
                <br></br>
              </Col>

              <Col sm={4} class='align-items-center'>

                <Row><strong class='text-center'><i className='fa-solid fa-heart'></i> Hit Points:</strong></Row>
                <Row><span class='text-center'>{character.stats.hitPointMax}</span></Row>
               
                <br></br>

                <Row><strong class='text-center'><i className='fa-solid fa-user-graduate'></i> Proficiency Bonus:</strong></Row>
                <Row><span class='text-center'>+ {character.stats.profBonus}</span></Row>
                  
                <br></br>

                <Row><strong class='text-center'>Inspiration:</strong></Row>
                <Row><span class='text-center'>{character.inspiration === true ? <div><i className='fa-solid fa-star'></i></div> : <div><i className='fa-regular fa-star'></i></div>}</span></Row>
              
                <br></br>
              </Col>
              <Col sm={2}></Col>
            </Row>  {/* end misc character stats  */}
          </Col>
        </Row>
      </Card>  {/* End character intro card */}




      </Col>
      <Col>


      

{/* NEW CARD */}
      <Card body>  {/* character stats card */}
     
      <Col>
        <Row> {/* Row 1 - Column Titles */}
          <Col xs={2}></Col>
          <Col xs={9}>
            <strong class='text-nowrap'> STATS&nbsp;&nbsp;-&nbsp;&nbsp;(MODIFIERS)&nbsp;&nbsp;-&nbsp;&nbsp;SAVING THROWS&nbsp;&nbsp;-&nbsp;&nbsp;SKILLS </strong>
          </Col>
        </Row> {/* End Row 1 - Column Titles */}
        <hr/>
{/* ------------------- */}
        

        <Row> {/* Row 2 - Strength */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong class='text-nowrap'><i class='fa-solid fa-weight-hanging'></i> STRENGTH:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.strength}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
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
              <span><i className='fa-solid fa-person-hiking'></i> Athletics:&nbsp;&nbsp;{character.stats.skills.athletics}</span>
            </Row>
          </Col>

        </Row> {/* End Row 2 - strength */}

{/* ------------------- */}
  
        <hr/>

        <Row> {/* Row 3 - Dexterity */}

          <Col xs={3}> {/* Col 1 - Stat title */}
            <Row>
              <strong class='text-nowrap'><i className='fa-solid fa-feather-pointed'></i> DEXTERITY:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.dexterity}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.dexModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.dexModifier)} </> :
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
                  <span><i className='fa-solid fa-person-running'></i> Acrobatics:&nbsp;&nbsp;{character.stats.skills.acrobatics}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-hand'></i> Slight of Hand:&nbsp;&nbsp;{character.stats.skills.slightOfHand}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-eye-slash'></i> Stealth:&nbsp;&nbsp;{character.stats.skills.stealth}</span>
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
              <strong class='text-nowrap'><i className='fa-solid fa-heart-pulse'></i> CONSTITUTION:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.constitution}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.constModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.constModifier)} </> :
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
              <strong class='text-nowrap'><i className='fa-solid fa-brain'></i> INTELLIGENCE:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.intelligence}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.intelModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.intelModifier)} </> :
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
                  <span><i className='fa-solid fa-wand-magic-sparkles'></i> Arcana:&nbsp;&nbsp;{character.stats.skills.arcana}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-bone'></i> History:&nbsp;&nbsp;{character.stats.skills.history}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-magnifying-glass'> </i> Investigation:&nbsp;&nbsp;{character.stats.skills.investigation}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-seedling'></i> Nature:&nbsp;&nbsp;{character.stats.skills.nature}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-hands-praying'></i> Religion:&nbsp;&nbsp;{character.stats.skills.religion}</span>
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
              <strong class='text-nowrap'><i className='fa-solid fa-chess'></i> WISDOM:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.wisdom}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.wisdomModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.wisdomModifier)} </> :
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
                  <span><i class='fa-solid fa-crow'></i> Animal Handling:&nbsp;&nbsp;{character.stats.skills.animalHandling}</span>
                </Row>
                <Row>
                  <span><i class='fa-regular fa-lightbulb'></i> Insight:&nbsp;&nbsp;{character.stats.skills.insight}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-prescription'></i> Medicine:&nbsp;&nbsp;{character.stats.skills.medicine}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-binoculars'></i> Perception:&nbsp;&nbsp;{character.stats.skills.perception}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-campground'></i> Survival:&nbsp;&nbsp;{character.stats.skills.survival}</span>
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
              <strong class='text-nowrap'><i className='fa-solid fa-users'></i> CHARISMA:</strong>
            </Row>
          </Col>

          <Col xs={1}> {/* Col 2 - Stats */}
            <Row>
              <span class='text-nowrap'>{character.stats.vitals.charisma}</span>
            </Row>
          </Col>

          <Col xs={2}> {/* Col 3 - Modifiers */}
            <Row>
              <span>
              ({character.stats.vitals.charismaModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.charismaModifier)} </> :
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
                  <span><i className='fa-solid fa-mask'></i> Deception:&nbsp;&nbsp;{character.stats.skills.deception}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-gun'></i> Intimidation:&nbsp;&nbsp;{character.stats.skills.intimidation}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-masks-theater'></i> Performance:&nbsp;&nbsp;{character.stats.skills.performance}</span>
                </Row>
                <Row>
                  <span><i className='fa-solid fa-comments'></i> Persuasion:&nbsp;&nbsp;{character.stats.skills.persuasion}</span>
                </Row>
                <br></br>
              </Col>
            </Row>
          </Col>
        </Row> {/* End Row 7 - charisma */}
      </Col>
    </Card>




{/* NEW CARD */}
    <Card body>
      <Col>

        <br></br>

        <Row><strong><i className='fa-solid fa-suitcase'></i> EQUIPMENT:</strong></Row> 
        <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row> 

        <br></br>
        <br></br>
                
        <Row><strong><i className='fa-solid fa-graduation-cap'></i> PROFICIENCIES:</strong></Row>
        <Row>
          <Col>
            <Row><span>{character.stats.proficiencies.weaponsProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.armorProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.toolProf.map((p) => "  [" + p + "]  ")}</span></Row>
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row><strong><i className='fa-solid fa-comment'></i> LANGUAGES:</strong></Row>
        <Row><span>{character.stats.proficiencies.languageProf.map((p) => "  [" + p + "]  ")}</span></Row>

        <br></br>
        <br></br>

        <Row><strong><i className='fa-solid fa-dna'></i> FEATURES & TRAITS:</strong></Row>
        <Row><span>{character.stats.traits.map((p) => "  [" + p + "]  ")}</span></Row>

        <br></br>
    
      </Col> 
    </Card>

    </Col>  
    </Row>  {/* end card grid */}
    </Container>
  </>
  )
}

export default CharacterScreen