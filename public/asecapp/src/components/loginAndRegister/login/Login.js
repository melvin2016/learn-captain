import React from 'react';
import classes from './Login.css';
import {Row,Input,Icon,Button} from 'react-materialize';
const Login = ()=>{
    return (
        <div className="container">
            <h1 className="flow-text center-align">Login</h1>
            <Row><Input s={12} m={12} label="User Id" validate><Icon>person</Icon></Input></Row>
            <Row><Input s={12} m={12} label="Password" validate><Icon>lock</Icon></Input></Row>
            <Row><Button className={classes.submit} waves='light'>Login<Icon right>chevron_right</Icon></Button></Row>
        </div>
    );
}

export default Login;