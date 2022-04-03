import React, {Component} from "react";
import './Header.css';
import logo from './logo.svg';
class Header extends Component{
    render(){
        return(
            <div className="header">
                <img src={logo}  className="headerLogo" alt="logo"/>
            </div>
        )
    }
}
export default Header;