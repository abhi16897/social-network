import React,{Component} from 'react';
import axios from'axios'
import jwt_decode from 'jwt-decode'
class Gallery extends Component {
    constructor(){
        super()
        this.state={
            data:[]
        }
       // this.getData=this.getData.bind(this)
    }

        componentDidMount(){
        const token=localStorage.userToken
        const decoded=jwt_decode(token)
        axios.post('posts/retrievemedia',{username:decoded.username}).then(res=>{
            this.setState({data:res.data})
        })
        console.log(this.state.data)
    }
    render() { 
     
        return ( 
            <div>
                    {
                        this.state.data.map(hello=>
                        <h1>{hello.username}</h1>
                            )     
                    }
            </div>
         );
    }
}
 
export default Gallery;