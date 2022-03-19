import React from 'react'
import { Card } from 'react-bootstrap'
import { Link }  from 'react-router-dom'

const Character = ({character}) => {
  return (
    <Card className='my-3 my-3 rounded'>

      <Link to={`/character/${character._id}`}>
        <Card.Img src={character.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/character/${character._id}`}>
          <Card.Title as='div'>
            <strong>{character.name}</strong>
          </Card.Title>
        </Link>

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