
import React, { Component } from "react";
import './Header.css';
import logo from './logo.svg';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="headerLogo" alt="logo" />
                <button className={this.props.headerBtnType}>{this.props.buttonName}</button>
            </div>
        )
    }
}
export default Header;