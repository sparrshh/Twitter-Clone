import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from "./firebase"

function TweetBox() {

    const [tweetMessage, settweetMessage] = useState("");
    const [tweetImg, settweetImg]= useState("");

    const setTweet = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            displayName:"Utkarsh Chaudhary",
            username:"matt",
            verified:true,
            text:tweetMessage,
            image:tweetImg,
            avatar:'https://picsum.photos/id/270/200/300'
        });
        settweetMessage("");
        settweetImg("")
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://picsum.photos/seed/picsum/200/300"/>
                    <input 
                    value={tweetMessage} 
                    type="text" 
                    placeholder="What's happening?" 
                    onChange={(e)=> settweetMessage(e.target.value)}
                    />
                </div>
                <input
                onChange={(e)=> settweetImg(e.target.value)} 
                value={tweetImg}
                className="tweetBox__imageinput" 
                type="text" 
                placeholder="Optional: Enter image URL" 
                />
                <Button onClick={setTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
