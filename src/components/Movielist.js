import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"
import Movies from "./Movies"

const Movielist = (props) => {
    const pushMovies = props.movieList.map((movie, index) =>{
        return <div className="movieDiv"><Movies key={index} info={movie} getFormData={props.getFormData} deleteMovie={props.deleteMovie} />
        </div>
      })
    return (
        <div className="container">
            <div className="innerContainer">
            <Navbar />
                <div className="pushedMovies">
                    {pushMovies}
                </div>
                <div className="buttonDiv">
                    <Link to='/'><button className="navButton">Back Home</button></Link>
                    <Link to='/movieform'><button className="navButton">Submit a Western</button></Link>
                </div>
            </div>
        </div>
    )
}
export default Movielist