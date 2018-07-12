import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import NavBarMedium from '../navbar/NavBarMedium';
import Login from '../loginAndRegister/login/Login';
import Register from '../loginAndRegister/register/Register';
import Dashboard from '../Dashboard/Dashboard';
import Auth from '../Auth/Auth';
import NotFound404 from '../NotFound404/NotFound404';
import axios from '../../lib/axios/instance';
import M from 'materialize-css';
import Home from '../Home/Home';
export default class RouterForLogAndReg extends Component{
    constructor(props){
        super(props);
        this.state = {
            progressBar:false,
            links:[
                {
                    link:'/login',
                    name:'Login'
                },
                {
                    link:'/register',
                    name:'Register'
                }
            ],
            isRegistered : false,
            isLoggedIn : false,
            isPassSame:false,
            registerAgain:true,
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
        //checks whether the user is authenticated even after a page refresh
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        
        if(isLoggedIn === "true"){
            this.setState({isLoggedIn:true});
        }else{
            this.setState({isLoggedIn:false});
        }
    }
    //============LOGOUT FUNCTIONS==========================================
    logoutHandler = ()=>{
        localStorage.clear();
        this.setState({isLoggedIn:false,isRegistered:false,loginInputs:{userid:null,password:null}});
        M.toast({html:"Succesfully Logged Out"});
    }
    //----------------------------------------------------------------------
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
        this.setState({progressBar:true});
        const body = {...this.state.loginInputs};
        axios.post('/user/login',{
            userid : body.userid,
            password : body.password
        })
        .then((res)=>{
            this.setState({progressBar:false});
            if(res.status === 200){
                localStorage.setItem('isLoggedIn',true);
                localStorage.setItem('jwt',res.data.jwt);
                this.setState({isLoggedIn:true});
                M.toast({html:"Logged In"});
            }
        })
        .catch((err)=>{
            this.setState({progressBar:false});
            if(err && err.response && err.response.status===401){
                M.toast({html:"Wrong Username or Password!"});
            }
        })
    }
    //----------------------------------------------------------------------
    //============REGISTER FUNCTIONS=========================================
    //submitting form and sending POST data to server ==> /register - /register
    onSubmit = (e)=>{
        const state = {...this.state.regInputs};
        if(state.userid !== null && state.uniseat !== null && state.tel !== null && state.password !== null && state.email !== null && state.cPassword !== null){
            if(state.cPassword !== state.password){
                M.toast({html:"Passwords Doesn't Match!"});
                return;
            }
            if(state.tel.length < 10 || state.tel.length > 10){
                M.toast({html:"Check Mobile Number!"});
                return;
            }
            this.setState({progressBar:true});
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
                this.setState({progressBar:false});
                if(res.status === 200){
                    this.setState({isRegistered:true});
                    M.toast({html:`User Registered with User Id : ${this.state.regInputs.userid}`});
                }
                this.setState({isRegistered:false});
            }).catch((err)=>{
                this.setState({progressBar:false});
                if(err && err.response){
                    console.log(err.response);
                    M.toast({html:`Internal server Error - ${err.response.data.err}`});
                }
            })
        }else{
            M.toast({html:"Check All The Fields !"});
        }
        
    }
    componentDidUpdate(){
        
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
                {(this.state.isLoggedIn === true)?null:<NavBarMedium links={this.state.links}/>}
                <Switch>
                    {/* this component is shown if route is */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" render={(props)=>
                        /*Giving Out Props to Login Component */
                        <Login {...props} progressBar={this.state.progressBar} isLoggedIn={this.state.isLoggedIn} submitHandlerLog={this.submitHandlerLog} handleInputLog={this.handleInputLog} />
                    } />
                    <Route path="/register" render={(props) =>  
                        /*Giving Out Props to Register Component */
                        <Register {...props} progressBar={this.state.progressBar}  isLoggedIn={this.state.isLoggedIn} isRegistered={this.state.isRegistered} onSubmit={this.onSubmit} checkPass={this.checkPass} password={this.state.regInputs.password} cPassword={this.state.regInputs.cPassword} handleInput={this.handleInput} isPassSame={this.state.isPassSame}/> 
                    }/>
                    
                    <Auth isLoggedIn={this.state.isLoggedIn} logoutHandler={this.logoutHandler} component={Dashboard}/>
                    <Route component={NotFound404}/>
                </Switch>
            </React.Fragment>
        );
    }
};