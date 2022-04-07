import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import Character from '../components/Character'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listCharacters } from '../actions/characterActions'

const CharacterListScreen = () => {

  const dispatch = useDispatch()
  const characterList = useSelector((state) => state.characterList)
  const {loading, error, characters} = characterList
  useEffect(() => {
    dispatch(listCharacters())
  }, [dispatch])

  return (
    <>
        <h1>The Cast</h1>
        {loading ? (
          <>
            <h2>Loading...</h2>
            <Loader />
          </>
        ) : error ? (
          <>
            <h3>{error}</h3>
            <Message variant='danger'>{error}</Message>
          </>
        ) : (
        <Row>
            {characters.map((character) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Character character={character} />
                </Col>
            ))}
        </Row>
        )}
    </>
  )
}

export default CharacterListScreen