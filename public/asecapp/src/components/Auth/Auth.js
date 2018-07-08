import {Route,Redirect} from 'react-router-dom';
import React from 'react';
const Auth = ({component:Component,isLoggedIn,logoutHandler,...props})=>{
        return (
                <Route {...props} render={(props)=>
                        (isLoggedIn===true)?
                        <Component {...props} logoutHandler={logoutHandler}/>:<Redirect to="/login"/>
                }/>
        );
};

export default Auth;