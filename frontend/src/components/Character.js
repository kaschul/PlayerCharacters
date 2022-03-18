import React from 'react'
import { Card } from 'react-bootstrap'

const Character = ({character}) => {
  return (
    <Card className='my-3 my-3 rounded'>

      <a href={`/character/${character._id}`}>
        <Card.Img src={character.image} variant='top' />
      </a>

      <Card.Body>
        <a href={`/character/${character._id}`}>
          <Card.Title as='div'>
            <strong>{character.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
          <div className='my-3'>
            <p>{character.race} {character.class}</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Character