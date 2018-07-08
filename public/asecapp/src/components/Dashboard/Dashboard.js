import React,{Component} from 'react';
import NavBarMedium from '../navbar/NavBarMedium';
class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
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
                    name:'Logout'
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <NavBarMedium links={this.state.links}/>
            </div>
        );
    }
}

export default Dashboard;