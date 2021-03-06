import React, {Component} from 'react'
import {login} from './Userfunctions'
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor(){
      super()
      this.state={
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
          username:this.state.username,
          password:this.state.password
      }
      login(user).then(res=>{
            console.log("logged in")
                this.props.history.push(`/profile`)
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
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" name="username" placeholder="enter Username" value={this.state.username} onChange={this.onChange}></input>
                             </div>
                             <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="enter Password" value={this.state.password} onChange={this.onChange}></input>
                             </div>
                             <div>
                             <Link to="/register" className="mb-4">Plase Do register </Link>
                             </div>
                             <button type="submit" className="btn btn-lg btn-primary mt-2"> 
                                Sign in
                             </button>
                        </form>
                    </div>
                </div>
            </div>
    );
    }
}
 
export default Login;
