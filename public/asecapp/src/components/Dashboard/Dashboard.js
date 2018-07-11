import React,{Component} from 'react';
import NavBarMedium from '../navbar/NavBarMedium';
import Upload from './Upload/Upload';
import M from 'materialize-css';
import Switch from 'react-router-dom/Switch';
import { Route } from 'react-router-dom';
import NotFound404 from '../NotFound404/NotFound404';
import Redirect from 'react-router-dom/Redirect';
import axios from '../../lib/axios/instance';
import FormData from 'form-data';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:null,
            file:null,
            isPdf:false,
            jwt:null,
            progressBar:false,
            links:[
                {
                    link:`/upload`,
                    name:'Upload Docs'
                },
                {
                    link:`/chat`,
                    name:'Group Chat'
                },
                {
                    link:'/logout',
                    name:'Logout',
                    func: props.logoutHandler
                }
            ]
        }
    }
    uploadHandler = (e)=>{
        const file = e.target.files[0];
        if( file && file.type === "application/pdf"){
            this.setState({
                isPdf:true,
                file:file
            });
        }else{
            this.setState({isPdf:false})
            M.toast({html:"Only Pdf File Allowed!"});
        }
    }
    uploadHandlerSubmit=()=>{
        this.setState({progressBar:true});
        axios.defaults.timeout = 10000;
        if(this.state.isPdf === true){
            const uploadData = new FormData();
            uploadData.append('pdfFile',this.state.file);
            axios.post("/api/upload",uploadData,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    jwt:this.state.jwt
                },
            })
            .then((res)=>{
                if(res.status === 200){
                    this.setState({progressBar:false});
                    M.toast({html:res.data.message});
                }
            })
            .catch((err)=>{
                this.setState({progressBar:false});
                if(err && err.response && err.response.status){
                    if(err.response.status === 401){
                        localStorage.clear();
                        this.setState({isLoggedIn:false});
                        M.toast({html:err.response.data.err});
                    }else if(err.response.status === 400){
                        M.toast({html:err.response.data.err});
                    }
                }
                console.log(err.response);
            });
        }else{
            this.setState({progressBar:false});
            M.toast({html:"Select Any Pdf before Uploading"});
        }
    }
    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        const jwt = localStorage.getItem('jwt');
        if(isLoggedIn === "true"){
            this.setState({isLoggedIn:true,jwt:jwt});
        }
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <NavBarMedium links={this.state.links}/>
                <Switch>
                    <Route path="/dashboard" render={()=>
                        <Redirect to="/upload" />    
                    }/>
                    <Route path="/upload" render={(props)=>
                        <Upload progressBar={this.state.progressBar} {...props} uploadHandlerSubmit={this.uploadHandlerSubmit} uploadHandler={this.uploadHandler} isPdf={this.state.isPdf}/>
                    }/>
                    <Route component={NotFound404}/>
                </Switch>
            </div>
        );
    }
}

export default Dashboard;