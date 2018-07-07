import React from 'react';
import classes from './Login.css';
import {Row,Input,Icon,Button} from 'react-materialize';
import Redirect from 'react-router/Redirect';
const Login = (props)=>{
    return (
        <div className="container">
            <h1 className="flow-text center-align">Login</h1>
            <Row><Input s={12} m={12} label="User Id" id="userid"onChange={props.handleInputLog} validate><Icon>person</Icon></Input></Row>
            <Row><Input s={12} m={12} label="Password" id="password" onChange={props.handleInputLog} validate><Icon>lock</Icon></Input></Row>
            <Row><Button onClick={props.submitHandlerLog} className={classes.submit} waves='light'>Login<Icon right>chevron_right</Icon></Button></Row>
            {props.isLoggedIn === true ? <Redirect to="/dashboard"/> : null}
        </div>
    );
}

export default Login;