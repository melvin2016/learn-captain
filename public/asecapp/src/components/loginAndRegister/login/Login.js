import React from 'react';
import classes from './Login.css';
import {Row,Input,Icon,Button} from 'react-materialize';
import Redirect from 'react-router/Redirect';
import {Link} from 'react-router-dom';
const Login = (props)=>{
    return (
        <div>
            {(props.progressBar === true)?<div className={"progress "+classes.progress}>
                <div className="indeterminate"></div>
            </div>:null
            }
            <div className="container">
                <h1 className="flow-text center-align">Login</h1>
                <p className="center-align flow-text">Don't have an account? <Link to="/register">Register.</Link></p>
                <Row><Input s={12} m={12} label="User Id" id="userid"onChange={props.handleInputLog} validate><Icon>person</Icon></Input></Row>
                <Row><Input s={12} m={12} type="password" label="Password" id="password" onChange={props.handleInputLog} validate><Icon>lock</Icon></Input></Row>
                <Row><Button onClick={props.submitHandlerLog} className={classes.submit} waves='light'>Login<Icon right>chevron_right</Icon></Button></Row>
                {props.isLoggedIn === true ? <Redirect to="/dashboard"/> : null}
            </div>
        </div>
    );
}

export default Login;