import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import Login from '../loginAndRegister/login/Login';
import Register from '../loginAndRegister/register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Auth from '../Auth/Auth';
import NotFound404 from '../NotFound404/NotFound404';
import axios from '../../lib/axios/instance';
export default class RouterForLogAndReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRegistered : false,
            isLoggedIn : false,
            isPassSame:false,
            regInputs:{
                userid:null,
                password:null,
                cPassword:null,
                email:null,
                tel:null,
                uniseat:null
            },
            loginInputs:{
                userid:null,
                password:null
            }
        }
    }
    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn === "true"){
            this.setState({isLoggedIn:true});
        }
        
    }
    //============LOGIN FUNCTIONS===========================================
    //capturing input data handler
    handleInputLog =(e)=>{
        const loginInputs = {...this.state.loginInputs};
        const inputValue = e.target.value;
        const inputTarget = e.target.id;
        this.setState({loginInputs:{...loginInputs,[inputTarget]:inputValue}});
    }
    //submit handler for userid and password
    submitHandlerLog = ()=>{
        const body = {...this.state.loginInputs};
        axios.post('/user/login',{
            userid : body.userid,
            password : body.password
        })
        .then((res)=>{
            if(res.status === 200){
                localStorage.setItem('isLoggedIn',true);
                this.setState({isLoggedIn:true});
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    //----------------------------------------------------------------------
    //============REGISTER FUNCTIONS=========================================
    //submitting form and sending POST data to server ==> /register - /register
    onSubmit = (e)=>{
        e.preventDefault();
        const body = {...this.state.regInputs};
        axios.post('/user/register',{
            userid : body.userid,
            password : body.password,
            email : body.email,
            num : body.tel,
            regno : body.uniseat 
        })
        .then((res)=>{
            if(res.status === 200){
                this.setState({isRegistered:true});
            }
        })
    }
    //checking for password's match - /register
    checkPass = (e)=>{
        if(e.target.value !== ""){
            if( this.state.regInputs.password === e.target.value || this.state.regInputs.cPassword === e.target.value ){
                this.setState({isPassSame:true});
            }else{
                this.setState({isPassSame:false});
            }
        }
    }
    //handling Input Changes and storing to state - /register
    handleInput=(e)=>{
        const regInputs = {...this.state.regInputs}
        const regInputTarget = e.target.id;
        const regInputValue = e.target.value;
        this.setState({regInputs:{...regInputs,[regInputTarget]:regInputValue}});
    }
    //----------------------------------------------------------------------
    render(){
        return (
            <React.Fragment>
                <Switch>
                    {/* this component is shown if route is */}
                    <Route exact path="/" render={()=><h1>Home</h1>}/>
                    <Route path="/login" render={(props)=>
                        /*Giving Out Props to Login Component */
                        <Login {...props} isLoggedIn={this.state.isLoggedIn} submitHandlerLog={this.submitHandlerLog} handleInputLog={this.handleInputLog} />
                    } />
                    <Route path="/register" render={(props) =>  
                        /*Giving Out Props to Register Component */
                        <Register {...props} isLoggedIn={this.state.isLoggedIn} isRegistered={this.state.isRegistered} onSubmit={this.onSubmit} checkPass={this.checkPass} password={this.state.regInputs.password} cPassword={this.state.regInputs.cPassword} handleInput={this.handleInput} isPassSame={this.state.isPassSame}/> 
                    }/>
                    
                    <Auth isLoggedIn={this.state.isLoggedIn} component={Dashboard}/>
                    <Route component={NotFound404}/>
                </Switch>
                
            </React.Fragment>
        );
    }
};