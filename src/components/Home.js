import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"

const Home = () => {
    return (
        <div className="container">
            <div className="innerContainer">
            <Navbar />
                <div className="welcomMessage">
                   <p>Howdy Partner! Welcome to the dopest Galvanize OMDB FrontEND ReRun Application.
                    Here you can view my sweet Database of Western Movies (cuz if your watching
                    anything else other than dudes, chewing tobacco, horses and guns.. well .. no
                    need to check your man card. It has already been pulled.)
                    </p>
                    <p>Pack a fat lip/cheek of your favorite chaw and click one of the Buttons Below to
                       Navigate to either the OMDB Display -or- mosey on over to the 
                       Submit page and submit your own Western to the Database.
                    </p>
                </div>
                <Link to='/movielist'><button className="navButton">Over to the OMDB</button></Link>
                <Link to='/movieform'><button className="navButton">Submit a Western</button></Link>
            </div>
        </div>
    )
}
export default Home