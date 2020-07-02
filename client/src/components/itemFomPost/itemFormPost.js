import React from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import { postData } from '../../actions/index'
class ItemFormPost extends React.Component () {
    state = {
        name: '',
        date: '',
        developer: '',
        img: '',
        desc: '',
        price: ''
    }
    
    handleSubmit() {
        e.preventDefault()
        const { name, email, password } = this.state
        console.log(this.state)
        this.props.postData(this.state)
    }
    render() {
        return (
            <Container className="mt-3">
            <Form>
            <Form.Group controlId="formBasicName">
                <Form.Label>Game Name</Form.Label>
                <Form.Control type="text" name='name' placeholder="Enter name" />
            </Form.Group>
    
            <Form.Group controlId="formBasicDeveloper">
                <Form.Label>Dev Name</Form.Label>
                <Form.Control type="text" name='developer' placeholder="Dev" />
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name='price' placeholder="Price" />
            </Form.Group>
            <Form.Group controlId="formBasicImg">
            <Form.Label>Img Src</Form.Label>
                <Form.Control type="text" name='img' placeholder="Image Src" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control name='desc' as="textarea" rows="3" />
            </Form.Group>
            <Button onClick={handleSubmit} variant="primary" type="submit">
                Submit
            </Button>
            </Form>
            </Container>
        )
    }
    
};

export default ItemFormPost