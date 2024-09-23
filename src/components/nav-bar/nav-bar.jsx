import { Component } from "react";
import './nav-bar.css'

class NavBar extends Component {

    render() {
        return (
            <div className="nav-bar">
                <div className="icon">
                    <h2 className="logo">
                        PraRoz
                    </h2>
                </div>
                <div className="nav-menu">
                    <ul className="menu-items">
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">SERVICES</a></li>
                        <li><a href="#">DESIGN</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar

