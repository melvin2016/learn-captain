import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Login from '../loginAndRegister/login/Login';
import Register from '../loginAndRegister/register/Register';

const RouterForLogAndReg = ()=>{
    return (
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </Switch>
    );
};
export default RouterForLogAndReg;