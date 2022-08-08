import React from "react";
import {Link} from "react-router-dom";
 import {Profile, ProfileInterface} from "../../../models/Profile";
 import { ProfileEios } from "../../../api/eios/ProfileEios";
import data from "../../../api/profile.json";

class ProfilePage extends React.Component{
    state = {
        profile: [new Profile()]
    }
    


    componentDidMount() {
         this.request();
    }
    

    

    async request() {
        const profile = await new ProfileEios().all();

        this.setState({profile: profile}) 
    }

    render() { 
        const rows = this.state.profile.map((person) => {
            return <div><h1>{person.fullname}</h1>
            </div>
        })
        const pr = new ProfileEios().all();
        console.log('data = ',data);
        console.log('profile',this.state.profile)
        console.log('pr',pr);
        return <div>
            <h1>Hello</h1>
            <span>{rows}</span>
        </div>
       }

    }


export default ProfilePage;