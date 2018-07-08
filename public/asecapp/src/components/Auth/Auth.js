import {Route,Redirect} from 'react-router-dom';
import React from 'react';
const Auth = ({component:Component,isLoggedIn,...props})=>{
        return (
                <Route {...props} render={(props)=>
                        (isLoggedIn===true)?
                        <Component {...props}/>:<Redirect to="/login"/>
                }/>
        );
};

export default Auth;