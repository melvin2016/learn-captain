import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import Login from '../loginAndRegister/login/Login';
import Register from '../loginAndRegister/register/Register';

class RouterForLogAndReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRegistered : false,
            isLoggedIn : false,
            regInputs:{
                userid:null,
                password:null,
                cPassword:null,
                email:null,
                tel:null,
                uniseat:null
            }
        }
    }
    submitHandlerReg = ()=>{
        console.log(this.state);
    }
    handleInput=(e)=>{
        const regInputs = {...this.state.regInputs}
        const regInputTarget = e.target.id;
        const regInputValue = e.target.value;
        switch(regInputTarget){
            case 'userid' : this.setState({regInputs:{...regInputs,userid:regInputValue}});
            break;
            case 'password' : this.setState({regInputs:{...regInputs,password:regInputValue}});
            break;
            case 'cPassword' : this.setState({regInputs:{...regInputs,cPassword:regInputValue}});
            break;
            case 'email' : this.setState({regInputs:{...regInputs,email:regInputValue}});
            break;
            case 'tel' : this.setState({regInputs:{...regInputs,tel:regInputValue}});
            break;
            case 'uniseat' : this.setState({regInputs:{...regInputs,uniseat:regInputValue}});
            break;
            default : throw new Error("Thing Which is not in e.target");
        }
    }
    render(){
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" render={ 
                    /*Giving Out Props to Route */
                    (props) => 
                    <Register {...props} submitHandlerReg={this.submitHandlerReg} handleInput={this.handleInput}/> 
                }/>
            </Switch>
        );
    }
};
export default RouterForLogAndReg;