import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap'
import { isEmail, isLength } from 'validator'
import { registerUser } from '../../Store/actions'


function RegisterForm ({state, handleFormState, register, errors}) {

  const {  
    fname,
    lname,
    email, 
    username,
    password,
    fnameGood,
    fnameError,
    lnameGood,
    lnameError,
    usernameGood,
    usernameError,
    emailGood,
    emailError, 
    passwordGood,
    passwordError
  } = state

  const handleReg = async (e) => {
    e.preventDefault()
    try {
      if(emailGood && passwordGood) {
        const res = await register({variables:{
          fname, 
          lname, 
          email, 
          username, 
          password
        }})
      }
    } catch (error) {
      // console.log(error)
    }
  }
  const handleChangeInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    const newData = {
      [name]: value
    }
    switch (name) {
      case 'fname':
        
        if(value && !isLength(value, {min:2, max: 30})) {
          handleFormState({fnameError:true})
        } else if (value && isLength(value, {min:2, max: 30})) {
          handleFormState({fnameError: false})
          handleFormState({fnameGood: true})
        }

        return handleFormState(newData)

      case 'lname':
        if(value && !isLength(value, {min:2, max: 30})) {
          handleFormState({lnameError: true})
        } else if (value && isLength(value, {min:2, max: 30})) {
          handleFormState({lnameError: false})
          handleFormState({lnameGood: true})
        }
        return handleFormState(newData)
      case 'username':
          if(value && !isLength(value, {min:2, max: 30})) {
            handleFormState({usernameError: true})
          } else if (value && isLength(value, {min:2, max: 30})) {
            handleFormState({usernameError: false})
            handleFormState({usernameGood: true})
          }
        return handleFormState(newData)
      case 'email':
        if(value && !isEmail(value)){
          handleFormState({emailError: true})
        } else if(value && isEmail(value) ) {
          handleFormState({emailError: false})
          handleFormState({emailGood: true})
        }
        return handleFormState(newData)
      case 'password':
          if(value && !value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&#])[A-Za-z\d@$!%#*^?&]{8,30}$/)) {
            handleFormState({passwordError: true})
          } else if (value && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*^?&#])[A-Za-z\d@$!%#*^?&]{8,30}$/)) {
            handleFormState({passwordError: false})
            handleFormState({passwordGood: true})
          }
        return handleFormState(newData)
      default:
        break
    }
  }
  return (
    <Container className="animated fadeIn">
      <Row className="d-flex justify-content-center py-5">
      <Col xs={10}>
        <Form 
        onSubmit={handleReg}
        method="post">
          <h1 className="display-4 mb-5">Register</h1>
          <FormGroup>
            <Label for="fname-reg">first name</Label>
            <Input
            valid={fnameGood}
            invalid={fnameError || (!!errors && !!errors.fname)}
            type="text"
            name="fname"
            id="fname-reg"
            placeholder="first name please"
            onChange={handleChangeInput}
            value={fname}
            />
            {errors && (errors.fname && <FormFeedback>{errors.fname.message}</FormFeedback>)}
          </FormGroup>
          <FormGroup>
            <Label for="lname-reg">last name</Label>
            <Input
            valid={lnameGood}
            invalid={lnameError|| (!!errors && !!errors.lname)}
            type="text"
            name="lname"
            id="lname-reg"
            placeholder="last name please"
            onChange={handleChangeInput}
            value={lname}
            />
            
            {errors && (errors.lname && <FormFeedback>{errors.lname.message}</FormFeedback>)}
          </FormGroup>
          <FormGroup>
            <Label for="username">username</Label>
            <Input
            valid={usernameGood}
            invalid={usernameError || (!!errors && !!errors.username)}
            type="text"
            name="username"
            id="username-reg"
            placeholder="username please"
            onChange={handleChangeInput}
            value={username}
            />
            {errors && (errors.username && <FormFeedback>{errors.username.message}</FormFeedback>)}
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
            valid={emailGood}
            invalid={emailError || (!!errors && !!errors.email)}
            type="email"
            name="email"
            id="email-reg"
            placeholder="your email please"
            onChange={handleChangeInput}
            value={email}
            />
            {errors && (errors.email && <FormFeedback>{errors.email.message}</FormFeedback>)}
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
            value={password}
            onChange={handleChangeInput}
            autoComplete="off"
            valid={passwordGood}
            invalid={passwordError|| (!!errors && !!errors.password)} 
            type="password" 
            name="password" 
            id="password-reg" 
            placeholder="shh.. secret.." 
            />
            {errors && (errors.password && <FormFeedback>{errors.password.message}</FormFeedback>)}
          </FormGroup>
          <Button>Sign In</Button>
          
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

function mapStateToProps({auth}){
 return { auth }
}
export default connect(mapStateToProps, { registerUser })(RegisterForm)