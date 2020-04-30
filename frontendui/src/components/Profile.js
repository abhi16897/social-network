import React, {Component} from 'react'
import jwt_decode from 'jwt-decode'
import UploadMedia from './UploadMedia'


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
                     <h1 className="mt-5">{'Welcome!'+this.state.firstname}</h1>
                     <UploadMedia/>
            </div>
            
         );
    }
}
 
export default Profile;