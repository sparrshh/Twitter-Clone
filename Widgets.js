import { Search } from '@material-ui/icons'
import React from 'react'
import'./Widgets.css'
import {TwitterTweetEmbed, TwitterShareButton, TwitterTimelineEmbed} from "react-twitter-embed"

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <Search className="widgets__searchIcon"/>
                <input type="text" placeholder="Search Twitter" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1394765564334149632"}/>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="maroon5"
                    options={{height:400}}
                    className="timeline"
                />
                <TwitterShareButton
                url={"www.google.com"}
                options={{text:"reactjs-is-awesom", via:"maroon5"}}
                />
            </div>
        </div>
    )
}

export default Widgets
