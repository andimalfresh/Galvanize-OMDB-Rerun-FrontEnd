import React from "react"
import {Link} from "react-router-dom"

const Movies = props => {
    return (
        <div className="movieWrapper">
            <div className="movieListWrapper">
                <ul className="movieList">
                    <li className="titleText">{props.info.title}</li>
                    <li className="yearText"> {props.info.year}</li>
                    <li className="directorText"> {props.info.director}</li>
                    <li><img className="movieImg" alt="Movie Poster for Title" src={props.info.poster_url} /></li>
                </ul>
                <Link to='/show'><button className="deleteButton" id={props.info.id}>Edit Movie</button></Link>
                <button className="deleteButton" onClick={props.deleteMovie} id={props.info.id} >Delete</button>
            </div>
        </div>
    )

}



export default Movies