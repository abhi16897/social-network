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
       this.deleteItem=this.deleteItem.bind(this)
    }
    deleteItem=(id)=>{
        axios.delete('posts/deleteitem/'+id).then(res=>{
            console.log(res)
               const updateditems= this.state.data.filter(dataitem=>dataitem.post_id!==id);
               this.setState({data:updateditems})
        })
    }
        componentDidMount(){
        const token=localStorage.userToken
        const decoded=jwt_decode(token)
        axios.post('posts/retrievemedia',{username:decoded.username}).then(res=>{
            this.setState({data:res.data})
        })
    }
       
    render() { 
     
        return ( 
            <div className="container">
                  <div className="card-deck">
                    {
                        this.state.data.map(data=>   
                        <div key={data.id} className="card mt-3" style={{width:"400"}}>
                            <img className="card-img-top" src={data.image} alt="Please select" style={{width:"100%",height:"15vw",objectFit:"cover"}}/>
                            <div className="card-body">
                        <h4 className="card-title"><b>Title:</b>{data.title}</h4>
                        <p className="card-text"><b>Caption:</b>{data.caption}</p>
                        <p className="card-text"><b>Description:</b>{data.description}</p>
                        <button className="btn btn-danger" onClick={()=>this.deleteItem(data.post_id)}>Delete</button>
                        </div>
                        </div>
                            )     
                    }
                      </div>
            </div>
         );
    }
}
 
export default Gallery;