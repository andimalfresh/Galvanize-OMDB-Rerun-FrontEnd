import React, { Component, Fragment } from "react";
import {Route} from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import Movieform from "./components/Movieform"
import Movielist from "./components/Movielist"
import Editpage from "./components/Editpage"

const movieDB = "https://galvanize-omdb.herokuapp.com/"
class App extends Component {

constructor() {
  super()
  this.state = {
    movieList: [],
    title: "",
    director:"",
    year: "",
    poster_url: "",
    your_rating: 0,
  }
}
getFormData = (event) => {
  const { value, name } = event.target
  this.setState({
    [name]: value
  })
}
loadMovies = () =>  {
  fetch(movieDB)
  .then(response => response.json()) 
  .then(response => this.setState({movieList: response}))
}
postMovie = () => {
  console.log("PostFired")
  let post = {
    title: this.state.title, 
    director: this.state.director, 
    year: this.state.year, 
    your_rating: this.state.your_rating,
    poster_url: this.state.poster_url 
  }
  fetch(movieDB, {
    method: "POST", 
    body: JSON.stringify(post), 
    headers: {
      "Content-Type": "application/json", 
    }
  })
  .then (sendMovie => sendMovie.json())
  .then(this.movieList)
  .then(alert("You added a Movie! Add another or return to Movies List"))
}
deleteMovie = (event) => {
  fetch(`${movieDB}${event.target.id}`, {
    method: "DELETE", 
  })
  .then(() => this.loadMovies())
}

async componentDidMount() {
  let responce = await fetch(movieDB)
  let json = await responce.json()
  console.log("jsonlog", json)
  this.setState ({
    movieList: json
  })
}

  render() {
    return (
      <Fragment>
			  <Route path = "/" exact component={Home} />
        <Route path ="/movielist" render={() => (<Movielist getFormData={this.getFormData} deleteMovie={this.deleteMovie} movieList={this.state.movieList} />)} />
        <Route path ="/movieform" render={() => (<Movieform getFormData={this.getFormData} postMovie={this.postMovie} />)} />
        <Route path ="/editpage" component={Editpage}/>
      </Fragment>
    );
  }
}

export default App
