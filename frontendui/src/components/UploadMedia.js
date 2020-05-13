import React,{Component} from 'react';
import axios from 'axios'
import jwt_decode from 'jwt-decode'
class UploadMedia extends Component {
  constructor(){
    super()
    this.state={
      image:null,
      title:'',
      caption:'',
      username:'',
      description:''
    }
  //  this.myref=React.createRef();
     this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
    this.onChangeFields=this.onChangeFields.bind(this)
  }
  handleChange=(e)=>{
    e.preventDefault()
    console.log(e.target.files[0])
    this.setState({image:e.target.files[0]})
    var reader = new FileReader();
    var url = reader.readAsDataURL(e.target.files[0]);
  
     reader.onloadend = function (e) {
        this.setState({
            imgSrc: [reader.result]
        })
      }.bind(this)
      console.log(url)
  }
  onChangeFields(e){
    e.preventDefault()
    this.setState({[e.target.name]:e.target.value})
}
  handleSubmit=(e)=>{
    e.preventDefault()
    const token=localStorage.userToken
    const decoded=jwt_decode(token)
    console.log(decoded.username)
    const data=new FormData()
   data.append('image',this.state.image)
   data.append('title',this.state.title)
   data.append('caption',this.state.caption)
   data.append('description',this.state.description)
   data.append('username',decoded.username)
   console.log(data)
    axios.post('posts/uploadmedia',data).then(res=>{
      console.log(res )
    }) 
  }
  render() { 
    return ( 
      <section>
      <form encType='multipart/form-data'>     
      <div className="form-group">
                  <label htmlFor="title">Upload Image</label>
           <input type="file" name="myfile"  className="form-control" onChange={this.handleChange}></input>
           </div>
           <div className="form-group">
                  <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" name="title" placeholder="enter Title" value={this.state.title} onChange={this.onChangeFields}></input>
          </div>
          <div className="form-group">
                  <label htmlFor="caption">Caption</label>
                    <input type="text" className="form-control" name="caption" placeholder="enter Caption" value={this.state.caption} onChange={this.onChangeFields}></input>
          </div>
          <div className="form-group">
                  <label htmlFor="desciption">Title</label>
                    <textarea type="text" className="form-control" name="description" placeholder="enter Description" value={this.state.description} onChange={this.onChangeFields}></textarea>
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary" > Upload</button>
          </form>  
          <img src={this.state.imgSrc}   alt="Please select" width="250" height="250" className="mt-5"/>
      </section>
     );
  }
}
 
export default UploadMedia;