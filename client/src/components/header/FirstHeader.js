import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl, Button, Container, Col, Row } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'; 

export default class FirstHeader extends Component {

    constructor({numItems, total}){
        super()
        this.numItems = numItems
        this.total = total
    }

    render() {
        return(
            <Navbar bg="light" variant="light" collapseOnSelect expand='sm'>
                <Col fluid>
                    <Row>
                    <Navbar.Brand href="/"><img 
                        src="https://svgsilh.com/svg/98520-795548.svg"
                        height="30"
                        width="30"
                        className="d-inline-block align-top"
                        alt="logo"/>
                    </Navbar.Brand>
                    
                    
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="pills" className="mr-auto">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/catalog">Каталог игр</Nav.Link>
                            <Nav.Link href="/newgames">Новинки</Nav.Link>
                            <Nav.Link href="/rewiew">Отзывы</Nav.Link>
                        </Nav>
                    
                    
                    </Navbar.Collapse>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
                    <Button href="/auth/login" variant="secondary" size="sm" className='ml-2'>
                        Авторизация
                    </Button>
                    </Row>
                    <Row xs={12}>
                    <Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
                    </Row>
                </Col>
            </Navbar>
        )
    }
}