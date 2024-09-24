import { Component } from "react";

import './form.css'

class Form extends Component {

    render() {
        return (
            <div className="form">
                <h2>Login Here</h2>
                <input
                    type="email"
                    className="email"
                    name="email"
                    placeholder="Enter Email Here"
                />
                <input
                    type="password"
                    className="password"
                    name="password"
                    placeholder="Enter Password Here"
                />

                <button className="login-btn"><a href="#">Login</a></button>

                <p className="link">
                    Don't have an account <br />
                    <a href="#">Sign up </a> here
                </p>
                <p className="liw">Login with</p>
            </div>
        )
    }

}

export default Form