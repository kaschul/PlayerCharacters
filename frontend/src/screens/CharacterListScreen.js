import React from 'react'
import { Row, Col } from 'react-bootstrap'
import characters from '../../../backend/data/characters'
import Character from '../components/Character'

const CharacterListScreen = () => {
  return (
    <>
        <h1>The Cast</h1>
        <Row>
            {characters.map((character) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Character character={character} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default CharacterListScreen