import React, {useState, useEffect} from 'react'; 
import youtube from './youtube';

function Video() {
    useState = {
        videos: [],
        selectedVideo: null
    }
    const response = await youtube.get('/search', {
        params: {
        q: ""}
        })
        this.setState({
            videos: response.data.items
        });
        console.log(response.data.items)

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    };   
    const VideoItem = ({video , handleVideoSelect}) => {
        return (
            <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
                <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='content'>
                    <div className='header '>{video.snippent.title}</div>
                </div>
            </div>
        )
    };
};
export default Video;
