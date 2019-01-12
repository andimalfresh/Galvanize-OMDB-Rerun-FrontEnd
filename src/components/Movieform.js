import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"

const Movieform = (props) => {
    return (
        <div className="container">
            <div className="innerContainer">
            <Navbar />
                <div className="movieEditFormWrapper">
                        <form classname="movieEditForm">
                            <label>
                                Title:
                            </label>
                                <input type="text" name="name" onChange={props.getFormData} />
                            <label>
                                Director:
                            </label>
                                <input type="text" name="director" onChange={props.getFormData} />
                            <label>
                                Year Released: 
                            </label>
                                <input type="text" name="year" onChange={props.getFormData} />
                            <label>
                                Poster Url: 
                            </label>
                                <input type="text" name="poster_url" onChange={props.getFormData} />
                            <label>
                                Rating: 
                            </label>
                                <input type="text" name="rating" onChange={props.getFormData} />
                                <input type="submit" className="navButton" onClick={props.postMovie} value="Submit" />
                        </form>
                    </div>
                        <Link to='/movielist'><button className="navButton">Over to the OMDB</button></Link>
                        <Link to='/'><button className="navButton">Back Home</button></Link>
            </div>
        </div>

    )
}
export default Movieform