import React,{Component} from 'react';
import NavBarMedium from '../navbar/NavBarMedium';
import Upload from './Upload/Upload';
import M from 'materialize-css';
import Switch from 'react-router-dom/Switch';
import { Route } from 'react-router-dom';
import NotFound404 from '../NotFound404/NotFound404';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:null,
            file:null,
            isPdf:false,
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

    }
    componentDidMount(){
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn === "true"){
            this.setState({isLoggedIn:true});
        }
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <NavBarMedium links={this.state.links}/>
                <Switch>
                    <Route path="/dashboard" render={(props)=>
                        <Upload {...props} uploadHandlerSubmit={this.uploadHandlerSubmit} uploadHandler={this.uploadHandler} isPdf={this.state.isPdf}/>
                    }/>
                    <Route path="/upload" render={(props)=>
                        <Upload {...props} uploadHandlerSubmit={this.uploadHandlerSubmit} uploadHandler={this.uploadHandler} isPdf={this.state.isPdf}/>
                    }/>
                    <Route component={NotFound404}/>
                </Switch>
            </div>
        );
    }
}

export default Dashboard;