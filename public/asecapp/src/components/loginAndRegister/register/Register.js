import React from 'react';
import classes from './Register.css';
import {Row,Input,Icon,Button} from 'react-materialize';
const Register = (props)=>{
    console.log(props);
    return(
        <div className={classes.nav+" container"}>
            <h1 className="flow-text center-align">Register</h1>
            <Row><Input s={12} m={12} label="User Id" id="userid"validate onChange={props.handleInput}><Icon>person</Icon></Input></Row>
            <Row>
                <Input s={7} m={7} label="Password" id="password" type="password" validate onChange={props.handleInput}><Icon>lock</Icon></Input>
                <Input s={5} m={5} label="Confirm password" id="cPassword" type="password" validate onChange={props.handleInput}></Input>
                </Row>
            <Row><Input s={12} m={12} label="Email Id" type="email" id="email" validate onChange={props.handleInput}><Icon>email</Icon></Input></Row>
            <Row><Input s={12} m={12} label="Mobile Number" type="tel" id="tel" validate onChange={props.handleInput}><Icon>contact_phone</Icon></Input></Row>
            <Row><Input s={12} m={12} label="University Roll No" id="uniseat" validate onChange={props.handleInput}><Icon>create</Icon></Input></Row>
            <Row><Button className={classes.submit} waves='light' onClick={props.submitHandlerReg}>Register<Icon right>chevron_right</Icon></Button></Row>
        </div>
    );
};

export default Register;