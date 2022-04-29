import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Character from '../components/Character'
import { listPCs } from '../actions/characterActions'

const CharacterListScreen = () => {
  const dispatch = useDispatch()
  const characterList = useSelector((state) => state.characterList)
  const {loading, error, characters} = characterList

  useEffect(() => {
    dispatch(listPCs())
  }, [dispatch])

  return (
  <>
    <h1>The Cast</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <Row>
        {characters.map((character) => (
          <Col key={character._id} sm={12} md={6} lg={4} xl={3}>
            <Character character={character} />
          </Col>
        ))}
      </Row>
    )}
  </>
  )
}

export default CharacterListScreen