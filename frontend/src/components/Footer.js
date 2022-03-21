import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col class='text-center py-6'>
                    <p>This page is unofficial Fan Content permitted under the Fan Content Policy. Not approved/endorsed by Wizards. Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.</p>
                    <p>Images are from Picrew: Fantasy Character Maker by Deerinspotlight, found at https://picrew.me/image_maker/708151, permitted for non-commercial use.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer