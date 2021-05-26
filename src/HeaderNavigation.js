import React,  { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'

import * as URLParameters from './URLParameters'

class HeaderNavigation extends Component {
	render() {
		if (URLParameters.showHeaderNavigation()) {
			return (
				<div className='Header'>
				<Navbar bg='light' expand='lg'>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
						<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='mr-auto'>
						<Nav.Link href='#home'>Lewis.education</Nav.Link>
							<NavDropdown title='Activity Lists' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#welcome'>Welcome</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#sprint/1'>Sprint 1</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/2'>Sprint 2</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/3'>Sprint 3</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/4'>Sprint 4</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/5'>Sprint 5</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/6'>Sprint 6</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/7'>Sprint 7</NavDropdown.Item>
								<NavDropdown.Item href='#sprint/8'>Sprint 8</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#calendar/0'>Calendar</NavDropdown.Item>
							</NavDropdown>
							<NavDropdown title='Help' id='basic-nav-dropdown'>
								<NavDropdown.Item href='#info'>Your Instructor</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#activity/study-table'>Study Table Tutoring</NavDropdown.Item>
								<NavDropdown.Item href='#getting-help'>University Resources</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='#credits'>Credits</NavDropdown.Item>
							</NavDropdown>
						{/*<Nav.Link href='#credits'>Credits</Nav.Link>*/}
						</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			)
		}
		else {
			return (null)
		}
	}
}

export { HeaderNavigation }