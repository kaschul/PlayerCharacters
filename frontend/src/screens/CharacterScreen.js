import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import characters from '../characters';

const CharacterScreen = () => {
  const params = useParams();

  const character = characters.find((c) => c._id === params.id)
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
                <h3>{character.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {character.race} - {character.alignment}
              </ListGroup.Item>
              <ListGroup.Item>
                {/* character subclass only displayed if not null */}
                Lvl {character.class} {character.subclass != null && <div> - {character.subclass}</div>}
              </ListGroup.Item>
              <ListGroup.Item>
                { character.background }
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Row>
          <p> {character.description} </p>
        </Row>
      </Card>

      <Card>
        <Row>
          <Col>
          {/*displays value, (modifier) 
          + modifier if > 0, - modifier if < 0, and -- if modifier == 0*/} 
            <Row>
              Strength: {character.stats.vitals.strength} 
              ({character.stats.vitals.strengthModifier < 0 ? 
                <div> - {character.stats.vitals.strengthModifier} </div> :
                character.stats.vitals.strengthModifier > 0 ?
                <div> + {character.stats.vitals.strengthModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              Dexterity: {character.stats.vitals.dexterity} 
              ({character.stats.vitals.dexModifier < 0 ? 
                <div> - {character.stats.vitals.dexModifier} </div> : 
                character.stats.vitals.dexModifier > 0 ?
                <div> + {character.stats.vitals.dexModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              Constitution: {character.stats.vitals.constitution} 
              ({character.stats.vitals.constitutionModifier < 0 ? 
                <div> - {character.stats.vitals.constitutionModifier} </div> :
                character.stats.vitals.constitutionModifier > 0 ? 
                <div> + {character.stats.vitals.constitutionModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              Intelligence: {character.stats.vitals.intelligence} 
              ({character.stats.vitals.intelModifier < 0 ? 
                <div> - {character.stats.vitals.intelModifier} </div> : 
                character.stats.vitals.intelModifier > 0 ?
                <div> + {character.stats.vitals.intelModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              Wisdom: {character.stats.vitals.wisdom} 
              ({character.stats.vitals.wisdomModifier < 0 ? 
                <div> - {character.stats.vitals.wisdomModifier} </div> : 
                character.stats.vitals.wisdomModifier > 0 ?
                <div> + {character.stats.vitals.wisdomModifier} </div> :
                <div> -- </div>})
            </Row>
            <Row>
              Charisma: {character.stats.vitals.charisma} 
              ({character.stats.vitals.charismaModifier < 0 ? 
                <div> - {character.stats.vitals.charismaModifier} </div> : 
                character.stats.vitals.charismaModifier > 0 ?
                <div> + {character.stats.vitals.charismaModifier} </div> :
                <div> -- </div>})
            </Row>
          </Col>
        </Row>
      </Card>
    </>
  )
}

export default CharacterScreen