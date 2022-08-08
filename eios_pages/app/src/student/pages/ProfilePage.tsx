import * as React from "react";
 import {StudentEios} from "../../models/StudentEios";
 import { ProfileEios } from "../../api/eios/ProfileEios";

class ProfilePage extends React.Component{
    state = {
        profile: [new StudentEios()]
    }
    


    componentDidMount() {
         this.request();
    }
    

    

    async request() {
        const profile = await new ProfileEios().first();

        this.setState({profile: profile}) 
    }

    render() { 
        const rows = this.state.profile.map((person) => {
            return <div><h1>{person.fullname}</h1>
            </div>
        })
        const pr = new ProfileEios().all();
        if (this.state.profile) { 
            console.log(this.state.profile)
         }

        console.log('profile',this.state.profile)
        console.log('pr',pr);
        return <div>
            <span>{rows}</span>
        </div>
       }

    }


export default ProfilePage;