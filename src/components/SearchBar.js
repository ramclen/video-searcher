import React from 'react';

class SearchBar extends React.Component{
  state = {term:''};

  formHandler = (event) => {
    event.preventDefault()
    this.props.onTermSubmit(this.state.term);
  }

  onTermChange = e =>{
    this.setState({term: e.target.value});
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.formHandler}>
          <div className="field">
            <label>Video search</label>
            <input type="text" placeholder="search video" onChange={this.onTermChange} />
          </div>
        </form>
      </div>
    );
  }
  
}

export default SearchBar;