import React from "react";
import SearchBar from "./components/SearchBar"
import youtube from "./api/youtube"
import VideoList from "./components/VideoList"

class App extends React.Component {

  state = {videos: []}

  onTermSubmit = term => {
    youtube.get('/search', { params: {
      q: term,
    }
    }).then(e=>{
      console.log(e.data.items)
      this.setState({videos: e.data.items})
    })
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;