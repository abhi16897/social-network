import React,{Component} from 'react';
import axios from 'axios'
class UploadMedia extends Component {
  constructor(){
    super()
    this.state={
      image:null
    }
  //  this.myref=React.createRef();
     this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
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
  handleSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state.image)
    const data=new FormData()
   data.append('image',this.state.image)
   console.log(data)
    axios.post('posts/uploadmedia',data).then(res=>{
      console.log(res )
    }) 
  }
  render() { 
    return ( 
      <section>
      <form encType='multipart/form-data'>     
           <input type="file" name="myfile" onChange={this.handleChange}></input>
          <button onClick={this.handleSubmit} > Upload</button>
          </form>  
          <img src={this.state.imgSrc}   alt="Please select" width="250" height="250" className="mt-5"/>
      </section>
     );
  }
}
 
export default UploadMedia;