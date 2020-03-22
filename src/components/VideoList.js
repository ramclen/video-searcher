import React from "react";

export default class VideoList extends React.Component {

  render() {
    const videosList = this.props.videos.map((video, i) => {
      return <a href={`https://www.youtube.com/watch?v=${video.id.videoId}}`} > {i} </a>
    }) 
    
    return (
      <div>
        {videosList}
      </div>
    )
  }
}