import React, { Component } from 'react';

import './App.css';
import LeftNav from "./components/Homepage/LeftNav"
import Feed from "./components/Homepage/Feed"
import RightNav from "./components/Homepage/RightNav"
import Post from "./components/Homepage/Post";


class App extends Component {

  constructor() {
    super()
    this.state = {
        post:[],
        term:"",
    }
}

//When submit is pressed
  postButton = (event) => {
        event.preventDefault()
        if (this.state.term === ""){
          return
        }
        let posts = 
        <Post
          DisplayName={"Ashley Bennett"}
          UserName={"ASHMA3STR0"}
          PostBody={this.state.term}                
        />
        
        this.setState(prevState => ({
          post: [...prevState.post, posts], term:"",
        }))
  }

// As your typing
  typingHandler = (event) => {
    this.setState({term: event.target.value})
}


  render() {
    return (
      <div className="App">

        <div className="LeftNav">
          <LeftNav   
            postButton={this.postButton}
            typingHandler={this.typingHandler}
            term={this.state.term}
          />
          </div>
        <div className="Feed">
          <Feed 
            post={this.state.post}
            submit={this.state.submit}
          />
        </div>
        <div className="RightNav">
        <RightNav/>
        </div>
      </div>
    );
  }
}

export default App;
