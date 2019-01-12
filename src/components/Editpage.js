import React from "react"
import Navbar from "./Navbar"
import {Link} from "react-router-dom"

const Editpage = (props) => {
    return (
<div className="container">
            <div className="innerContainer">
            <Navbar />
                <div className="movieEditFormWrapper">
                        <form className="movieEditForm" onSubmit={props.handleSubmit}>
                            <label>
                                Title:
                            </label>
                                <input type="text" name="name" onChange={props.getName} />
                            <label>
                                Director:
                            </label>
                                <input type="text" name="director" onChange={props.getDirector} />
                            <label>
                                Year Released: 
                            </label>
                                <input type="text" name="year" onChange={props.getYear} />
                            <label>
                                Poster Url: 
                            </label>
                                <input type="text" name="poster_url" onChange={props.getPoster} />
                                <input type="submit" className="navButton" onClick={props.updateMovie} value="Submit" />
                        </form>
                    </div>
                        <Link to='/movielist'><button className="navButton">Over to the OMDB</button></Link>
                        <Link to='/'><button className="navButton">Back Home</button></Link>
            </div>
        </div>

    )
}
export default Editpage