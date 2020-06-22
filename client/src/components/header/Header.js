import React, { Component } from 'react'
import { Navbar, Container, FormGroup, Nav, Form, FormControl, Button, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default class FirstHeader extends Component {

    constructor({numItems, total}){
        super()
        this.numItems = numItems
        this.total = total
    }

    render() {
        return(
            <Navbar bg="light" variant="light" expand='md'>
                <Container fluid className="align-items-flex-start">
                    <Col md={3}>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    </Col>
                    <Col md={9}>
                        <Row className='m-auto'>
                            <Button variant="primary" size="sm">
                               {this.numItems} items (${this.total})
                            </Button>
                            <Button variant="secondary" size="sm">
                                SIGN IN
                            </Button>
                        </Row>
                        
                        <Form>
                            
                            <FormControl type="text" placeholder="Search"/>
                            <Button variant="outline-success">Search</Button>
                           
                               
                        </Form> 
                        
                        
                        
                    </Col>
                    
                  
                
                </Container>
                
            </Navbar>



            // <Navbar bg="light" variant="light" collapseOnSelect expand='md'>
            //     <Col>
            //     <Row>
            //         <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    // <Button variant="primary" size="sm" className='ml-auto'>
                    //     {this.numItems} items (${this.total})
                    // </Button>
                    // <Button variant="secondary" size="sm" className='ml-2'>
                    //     SIGN IN
                    // </Button>
            //     </Row>
            //     <Row>
                    // <Nav className="mr-auto">
                    //     <Nav.Link href="#home">Каталог</Nav.Link>
                    //     <Nav.Link href="#features">Features</Nav.Link>
                    //     <Nav.Link href="#pricing">Pricing</Nav.Link>
                    // </Nav>
                    // <Form inline>
                    //     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    //     <Button variant="outline-success">Search</Button>
                    // </Form>
            //     </Row>
            //     </Col>     
            // </Navbar>
        )
    }
}