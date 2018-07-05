import React from 'react';
import classes from './Register.css';
import {Row,Input,Icon,Button} from 'react-materialize';
const Register = ()=>{
    return(
        <div className={classes.nav+" container"}>
            <h1 className="flow-text center-align">Register</h1>
            <Row><Input s={12} m={12} label="User Id" validate><Icon>person</Icon></Input></Row>
            <Row>
                <Input s={7} m={7} label="Password" validate><Icon>lock</Icon></Input>
                <Input s={5} m={5} label="Confirm password" validate></Input>
                </Row>
            <Row><Input s={12} m={12} label="Email Id" validate><Icon>email</Icon></Input></Row>
            <Row><Input s={12} m={12} label="Mobile Number" validate><Icon>contact_phone</Icon></Input></Row>
            <Row><Input s={12} m={12} label="University Roll No" validate><Icon>create</Icon></Input></Row>
            <Row><Button className={classes.submit} waves='light'>Register<Icon right>chevron_right</Icon></Button></Row>
        </div>
    );
};

export default Register;