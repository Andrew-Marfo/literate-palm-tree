import { Component } from "react";

import './body.css'

class Body extends Component {

    render() {
        return (
            <div className="content">
                <h1>Web Design & <br />Development <br />Course</h1>
                <p className="par">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem consequatur doloribus odit sed, <br />
                    recusandae et vero beatae quas quisquam quae amet molestias eligendi <br />
                    expedita. Enim quisquam rerum numquam consequuntur sunt.
                </p>
                <button className="cn"><a href="#">JOIN US</a></button>
            </div>
        )
    }
}

export default Body