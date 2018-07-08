import React,{Component} from 'react';
import NavBarMedium from '../navbar/NavBarMedium';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:null,
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
            </div>
        );
    }
}

export default Dashboard;