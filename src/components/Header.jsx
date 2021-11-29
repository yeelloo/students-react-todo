import React from 'react'
import { Container, Form, FormControl, Nav, Button  } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import PropTypes from 'prop-types'


export default function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">w3c Todo App</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                </Nav>
                {props.searchBar ? 
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                : "" }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
Header.defaultProps = {
    searchBar : true
}
Header.propTypes = {
    searchBar : PropTypes.bool.isRequired
}