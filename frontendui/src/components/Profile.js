import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'

class Profile extends Component {
    constructor(){
        super()
        this.state={
            firstname:'',
            lastname:'',
            username:''
        }
    }

    componentDidMount(){
        const token=localStorage.userToken
        const decoded=jwt_decode(token)
        this.setState({
            firstname:decoded.firstname,
            lastname:decoded.lastname,
            username:decoded.username
        })
    }
  
    render() { 
        return ( 
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-ms-8 mx-auto">
                        <h1 className="text-center">
                            {this.state.firstname+'hello'}
                        </h1><br/>
                        <h1 className="text-center">
                            {this.state.lastname}
                        </h1><br/>
                        <h1 className="text-center">
                            {this.state.username}
                        </h1>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;