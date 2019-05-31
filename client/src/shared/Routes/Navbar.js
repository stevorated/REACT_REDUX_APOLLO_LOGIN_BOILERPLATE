import React, { useState, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { elevationJs } from '../Utils'
import { logoutUser } from '../Store/actions'

function NavbarHeader ({auth, logoutUser}) {
  const [collapsed, toggleNavbar] = useState(false)
  const handleToggleNav = () =>toggleNavbar(!collapsed)
  const handleClick = () => {
    if(collapsed===true) {
      toggleNavbar(!collapsed)
    }
  }
  const handleLogout = async () => {
    const res = await logoutUser()
      if(collapsed===true) {
        toggleNavbar(!collapsed)
      }
  }
  const authBtn = auth ? (
    <NavLink className='nav-link' to="/login" onClick={handleLogout}>Logout</NavLink>
  ) : (
    <div className="d-md-flex">
    <NavLink className='nav-link' to="/login" onClick={handleClick}  >Login</NavLink>
    <NavLink className='nav-link' to="/register" onClick={handleClick}  >Register</NavLink>
    </div>
  )
  return (
      <Navbar color="dark" style={elevationJs[4]} dark expand="md" fixed="top">
          <NavLink 
          style={{fontSize: '1.1rem'}}
          className="nav-link text-white" 
          onClick={handleClick}
          to="/">Wisdom Of De Crowd
          </NavLink>
        <NavbarToggler
        onClick={handleToggleNav} 
        />
        <Collapse isOpen={collapsed} navbar>
          <Nav navbar>
          </Nav>
          <Nav className="ml-auto pr-4" navbar>
            <NavItem>
              <NavLink 
              className='nav-link' 
              onClick={handleClick}  
              to='/admins'
              >
              Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              className='nav-link' 
              onClick={handleClick} 
              to='/blabla'
              >
              404
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
              className='nav-link' 
              onClick={handleClick}  
              to='/test'
              >
              test
              </NavLink>
            </NavItem>
            <NavItem>
              {authBtn}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps, {logoutUser})(NavbarHeader)


// <Switch>
// {routes.map(route => <Route key={route.name} {...route} />)}
// </Switch>

