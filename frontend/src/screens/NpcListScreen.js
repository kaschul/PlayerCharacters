import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'
import Npc from '../components/Npc'
import { listNPCs } from '../actions/characterActions'



const NpcListScreen = () => {
  
  const dispatch = useDispatch()
  const npcList = useSelector((state) => state.npcList)
  const { loading, error, npcs } = npcList
  useEffect(() => {
    dispatch(listNPCs())
  }, [dispatch])

  return (
    <>
        <h1>The Crew</h1>
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
            {npcs.map((npc) => (
                <Col key={npc._id} sm={12} md={6} lg={4} xl={3}>
                    <Npc npc={npc} />
                </Col>
            ))}
        </Row>
        )}
    </>
  )
}

export default NpcListScreen