import React from "react";
import { Card, Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

    const navigate = useNavigate()
    const goToPCs = () => {
        navigate('/characters')
    }
    const goToNPCs = () => {
        navigate('/npcs')
    }

    return(
        <>
            <Card>
                <Row>
                    <Col>
                        <Button
                            className='btn-block btn-dark my-3'
                            type='button'
                            onClick={goToPCs}
                        >
                            The Cast
                        </Button>
                    </Col>
                    <Col>
                       <Button
                            className='btn-block btn-dark my-3'
                            type='button'
                            onClick={goToNPCs}
                        >
                            The Crew
                        </Button>
                    </Col>
                </Row>
            </Card>
        </>
    )

}

export default HomeScreen