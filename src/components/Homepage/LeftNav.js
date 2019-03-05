import React from 'react';
import Profile from "./Profile"
import NewPost from "./NewPost"
import Search from "./Search"
import Message from "./Message"
import "./LeftNav.css";


class LeftNav extends React.Component{

    render(){
        return(
            <div>
                <h1 className="LeftNav">Left Nav</h1>
                <Profile />
                <Search />
                <NewPost/>
                <Message />

            </div>
        )
    }


}

export default LeftNav