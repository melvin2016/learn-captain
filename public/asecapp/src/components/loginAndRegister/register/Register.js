import React from 'react';
import classes from './Register.css';
import {Row,Input,Icon,Button} from 'react-materialize';
import Redirect from 'react-router-dom/Redirect';
const Register = (props)=>{
    return(
        <div className={classes.nav+" container"}>
            <h1 className="flow-text center-align">Register</h1>
            <Row><Input s={12} m={12} label="User Id" id="userid" validate onInput={props.handleInput}><Icon>person</Icon></Input></Row>
            <Row>
                <div className="input-field col s12 m7">
                    <i className="material-icons prefix">lock</i>
                    <input type="password" id="password" onChange={props.checkPass}  className={(props.isPassSame === true ?" valid" : " invalid") } onInput={props.handleInput}/>
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s12 m5">
                    <i className="hide-on-med-and-up material-icons prefix">lock</i>
                    <input type="password" id="cPassword" onChange={props.checkPass}  className={(props.isPassSame === true ?" valid" : " invalid" )} onInput={props.handleInput}/>
                    <label htmlFor="cPassword">Confirm Password</label>
                </div>
            </Row>
            <Row><Input s={12} m={12} label="Email Id" type="email" id="email" validate onChange={props.handleInput}><Icon>email</Icon></Input></Row>
            <Row><Input s={12} m={12} label="Mobile Number" type="tel" id="tel" validate onChange={props.handleInput}><Icon>contact_phone</Icon></Input></Row>
            <Row><Input s={12} m={12} label="University Roll No" id="uniseat" validate onChange={props.handleInput}><Icon>create</Icon></Input></Row>
            <Row><Button className={classes.submit} waves='light' onClick={props.onSubmit}>Register<Icon right>chevron_right</Icon></Button></Row>
            {/* Redirects route to /login if registered successfully */}
            {props.isRegistered === true || props.isLoggedIn === true ? <Redirect to="/login"/> : null}
        </div>
    );
};

export default Register;