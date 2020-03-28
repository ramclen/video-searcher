import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from "./api/youtube"
import VideoList from "./components/VideoList"
import VideoDetail from "./components/VideoDetail";
class App extends React.Component {

  state = {videos: [], selectedVideo: null}

  componentDidMount(){
    this.onTermSubmit('buildings')
  }

  onTermSubmit = term => {
    youtube.get('/search', { params: {
      q: term,
    }
    }).then(e=>{
      console.log(e.data.items)
      this.setState({selectedVideo: e.data.items[0],videos: e.data.items})
    })
  };

  onVideoSelected = (video) =>{
    this.setState({selectedVideo:video})
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelected={this.onVideoSelected} />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;