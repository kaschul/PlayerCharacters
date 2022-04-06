import React from 'react'
import { Row, Col } from 'react-bootstrap'
import npcs from '../../../backend/data/npcs'
import Npc from '../components/Npc'

const NpcListScreen = () => {
  return (
    <>
        <h1>The Crew</h1>
        <Row>
            {npcs.map((npc) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Npc npc={npc} />
                </Col>
            ))}
        </Row>
    </>
  )
}

export default NpcListScreen