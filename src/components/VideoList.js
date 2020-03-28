import "./VideoItem.css"
import React from "react";
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelected}) => {

  const videosList = videos.map((video) => {
    return (<VideoItem key={video.id.videoId} video={video} onVideoSelected={onVideoSelected} />)
  }) 

  return (
    <div className="ui relaxed divided list" >
      {videosList}
    </div>
  )
}

export default VideoList;