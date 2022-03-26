import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, Card, Container } from 'react-bootstrap'
import npcs from '../npcs';

const NpcCharacterScreen = () => {
 
  const params = useParams();

  const character = npcs.find((p) => p._id === params.id)
  return(
    <>
      <Link className='btn btn-light my-3' to='/npcs'>
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
            <Row>
                <span>{character.relationships.status !== false && <>{character.relationships.type} {character.relationships.relationship}</>}</span>
            </Row>
            <Row>
                <span>{character.relationships.relationship2 != null && <>{character.relationships.relationship2}</>}</span>
            </Row>

            <br></br>

            <Row>
              <p> {character.description} </p>
            </Row>
          </Col>
        </Row>
      </Card>  {/* End character intro card */}




      </Col>
      <Col>




{/* NEW CARD */}
    <Card body>

    <Row>  {/* Character rolls */}
              <Col sm={2}></Col>
              <Col sm={4} class='align-items-center'>
          
                <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-weight-hanging'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;STRENGTH:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.strength}
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>
               
                <br></br>

                <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-feather-pointed'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;DEXTERITY:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.dexterity}
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>

                <br></br>

                <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-heart-pulse'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;CONSTITUTION:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.constitution}
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>
            
                <br></br>
              </Col>

              <Col sm={4} class='align-items-center'>

              <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-brain'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;INTELLIGENCE:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.intelligence} 
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>
               
                <br></br>

                <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-chess'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;WISDOM:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.wisdom} 
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>
                <br></br>

                <Row>
                    <strong className='text-center text-nowrap'><i className='fa-solid fa-users'></i> 
                    <span className='d-none d-xl-inline-block'>&nbsp;CHARISMA:</span></strong>
                </Row>
                <Row><span class='text-center text-nowrap'>{character.stats.vitals.charisma} 
                &nbsp;&nbsp;({character.stats.vitals.strengthModifier < 0 ? 
                <> - {Math.abs(character.stats.vitals.strengthModifier)} </> :
                character.stats.vitals.strengthModifier > 0 ?
                <> + {character.stats.vitals.strengthModifier} </> :
                <> -- </>})</span></Row>
              
                <br></br>
              </Col>
              <Col sm={2}></Col>
            </Row>

            <hr></hr>
            <br></br>

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

    </Card>





{/* NEW CARD */}
    <Card body>
      <Col>

        <br></br>

        <Row>
          <strong><i className='fa-solid fa-suitcase'></i> 
          <span className='d-none d-lg-inline-block'> &nbsp;&nbsp;EQUIPMENT:</span></strong>
        </Row> 
        <Row><span>{character.stats.equipment.map((p) => " [" + p + "] ")}</span></Row> 

        <br></br>
        <br></br>
                
        <Row>
          <strong><i className='fa-solid fa-graduation-cap'></i> 
          <span className='d-none d-lg-inline-block'> &nbsp;&nbsp;PROFICIENCIES:</span></strong>
        </Row>
        <Row>
          <Col>
            <Row><span>{character.stats.proficiencies.weaponsProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.armorProf.map((p) => "  [" + p + "]  ")}</span></Row>
            <Row><span>{character.stats.proficiencies.toolProf.map((p) => "  [" + p + "]  ")}</span></Row>
          </Col>
        </Row>

        <br></br>
        <br></br>

        <Row>
          <strong><i className='fa-solid fa-comment'></i> 
          <span className='d-none d-lg-inline-block'> &nbsp;&nbsp;LANGUAGES:</span></strong>
        </Row>
        <Row><span>{character.stats.proficiencies.languageProf.map((p) => "  [" + p + "]  ")}</span></Row>

        <br></br>
        <br></br>

        <Row>
          <strong><i className='fa-solid fa-dna'></i> 
          <span className='d-none d-lg-inline-block'> &nbsp;&nbsp;FEATURES & TRAITS:</span></strong>
        </Row>
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

export default NpcCharacterScreen