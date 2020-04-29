import React, {Component} from 'react'
import {register} from './Userfunctions'

class Register extends Component {
  constructor(){
      super()
      this.state={
          firstname:'',
          lastname:'',
          username:'',
          password:''
      }
      this.onChange=this.onChange.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
  }
  onChange(e){
      this.setState({[e.target.name]:e.target.value})
  }
  onSubmit(e){
      e.preventDefault()
      const user={
          firstname:this.state.firstname,
          lastname:this.state.lastname,
          username:this.state.username,
          password:this.state.password
      }
      register(user).then(res=>{   
                this.props.history.push('/login')
      })
  }
    render() { 
        return (  
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                             <h1 className="h3 mb-3 font-weight-normal"> Please sign in</h1>
                             <div className="form-group">
                                <label htmlFor="firstname">firstname</label>
                                <input type="text" className="form-control" name="firstname" placeholder="enter firstname" value={this.state.firstname} onChange={this.onChange}></input>
                             </div>
                             <div className="form-group">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" className="form-control" name="lastname" placeholder="enter lastname" value={this.state.lastname} onChange={this.onChange}></input>
                             </div>
                             <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" placeholder="enter Username" value={this.state.username} onChange={this.onChange}></input>
                             </div>
                             <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="enter Password" value={this.state.password} onChange={this.onChange}></input>
                             </div>
                             <button type="submit" className="btn btn-lg btn-block"> 
                               Register
                             </button>
                        </form>
                    </div>
                </div>
            </div>
    );
    }
}
 
export default Register;
