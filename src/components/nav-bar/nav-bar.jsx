import { Component } from "react";

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
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>DESIGN</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar

