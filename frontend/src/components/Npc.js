import React from 'react'
import { Card } from 'react-bootstrap'
import { Link }  from 'react-router-dom'

const Npc = ({npc}) => {
  return (
    <Card className='my-3 my-3 rounded'>

      <Link to={`/npc/${npc._id}`}>
        <Card.Img src={npc.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/npc/${npc._id}`}>
          <Card.Title as='div' class='text-center'>
            <strong>{npc.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='div' class='text-center'>
          <div className='my-3'>
            <p>{npc.race} {npc.class}</p>
          </div>

          <div className='my-3'>
            <p>{npc.relationships.status !== false ? 
            <> {npc.relationships.type} {npc.relationships.relationship} </> :
            <> - </>} </p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Npc