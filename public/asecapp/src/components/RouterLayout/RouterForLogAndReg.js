import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import Login from '../loginAndRegister/login/Login';
import Register from '../loginAndRegister/register/Register';
import axios from 'axios';

export default class RouterForLogAndReg extends Component{
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
            },
            isPassSame:null
        }
    }
    //submitting form and sending POST data to server ==> /register
    onSubmit = (e)=>{
        e.preventDefault();
        const body = {...this.state.regInputs};
        axios.post('http://localhost:4000/user/register',{
            userid : body.userid,
            password : body.password,
            email : body.email,
            num : body.tel,
            regno : body.uniseat 
        })
        .then((res)=>{
            console.log(res);
        })
    }
    //checking for password's match
    checkPass = (e)=>{
        if(e.target.value !== ""){
            if(this.state.regInputs.password ===  this.state.regInputs.cPassword ){
                this.setState({isPassSame:true});
            }else{
                this.setState({isPassSame:false});
            }
        }
    }
    //handling Input Changes and storing to state
    handleInput=(e)=>{
        const regInputs = {...this.state.regInputs}
        const regInputTarget = e.target.id;
        const regInputValue = e.target.value;
        this.setState({regInputs:{...regInputs,[regInputTarget]:regInputValue}});
    }
    render(){
        return (
            <Switch>
                <Route exact path="/" render={()=><h1>Home</h1>}/>
                <Route path="/login" component={Login} />
                <Route path="/register" render={ 
                    /*Giving Out Props to Route */
                    (props) => 
                    <Register {...props} onSubmit={this.onSubmit} checkPass={this.checkPass} password={this.state.regInputs.password} cPassword={this.state.regInputs.cPassword} handleInput={this.handleInput} isPassSame={this.state.isPassSame}/> 
                }/>
            </Switch>
        );
    }
};