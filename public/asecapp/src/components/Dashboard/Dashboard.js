import React,{Component} from 'react';
import NavBarMedium from '../navbar/NavBarMedium';
import Upload from './Upload/Upload';
import Toast from 'react-materialize/lib/Toast';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:null,
            file:null,
            toast:{
                message:null,
            },
            links:[
                {
                    link:'/upload',
                    name:'Upload Docs'
                },
                {
                    link:'/chat',
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
                toast:{message:null},
                file:file
            });
        }else{
            this.setState({toast:{message:"Only Pdf File Allowed!"}});
        }
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
                <Upload uploadHandler={this.uploadHandler} toast={this.state.toast.message}/>
            </div>
        );
    }
}

export default Dashboard;