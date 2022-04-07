import React, { useEffect } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card, ListGroupItem } from 'react-bootstrap'

import Message from './components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'



const CartScreen = () => {

    const location = useLocation()
    const dispatch = useDispatch()
    const params = useParams()
    const navigate = useNavigate()
    const characterId = params.id
    
    useEffect(() => {
        if (characterId){
            dispatch(addToCart(characterId))
        }
    }, [dispatch, characterId])

    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const exportHandler = () => {
        navigate('/export')
    }

    return (
        <Row>
            <Col md={8}>
                <h1>My Adventuring Party</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        You have no party members - <Link to='/characters'>Choose an adventurer!</Link>
                    </Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map((item) => {
                            <ListGroup.Item key={item.character}>
                                <Row>
                                    <Col>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col>
                                        <Link to={`/character/${item.character}`}>{item.name}</Link>
                                    </Col>
                                    <Col>
                                        <Button
                                            type='button'
                                            variant='dark'
                                            onClick={() => removeFromCartHandler(item.character)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        })}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>
                                Party Number: ({cartItems.reduce((acc, item) => acc + item, 0)}) members
                            </h2>
                        </ListGroup.Item>
                        <ListGroupItem>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={exportHandler}
                            >
                                Export
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartScreen