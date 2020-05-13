import React, {Component} from 'react';
import {Link,withRouter} from 'react-router-dom'


class Navbar extends Component {
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('userToken')
        this.props.history.push(`/`)
    }
    render() { 
        const loginRegLink=(
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">register</Link>
                    </li>
                  
                </ul>
            )
            const userLink=(
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/profile" className="nav-link">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link">Gallery</Link>
                    </li>
                    <li className="nav-item">
                    <a href="# " onClick={this.logOut.bind(this)} className="nav-link" >
                        Logout
                    </a>
                    </li>
                </ul>
            )
        return (  
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-targe="#navbar1" aria-controls="navbar1"  aria-label="Toggle navigation" >
               <span className="navbar-toggle-icon"></span>
               </button>
               <div className="collapse navbar-collapse justify-content-md-conter" id="navbar1">
                   <ul className="navbar-nav">
                       <li className="nav-item">
                           <Link to="/" className="nav-link">HOME</Link>
                       </li>
                   </ul>
                   {localStorage.userToken ? userLink:loginRegLink}
               </div>
            </nav>
        );
    }
}
 
export default withRouter(Navbar);