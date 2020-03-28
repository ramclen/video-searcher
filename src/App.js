import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from "./api/youtube"
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail";
class App extends React.Component {

  state = {videos: [], selectedVideo: null}

  onTermSubmit = term => {
    youtube.get('/search', { params: {
      q: term,
    }
    }).then(e=>{
      console.log(e.data.items)
      this.setState({videos: e.data.items})
    })
  };

  onVideoSelected = (video) =>{
    this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
      </div>
    );
  }
}

export default App;