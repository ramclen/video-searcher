import React from 'react';


class SearchBar extends React.Component{

  formHandler = (event) => {
    event.preventDefault()
    console.log(event);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.formHandler}>
          <div className="field">
            <label>Video search</label>
            <input type="text" placeholder="search video" />
          </div>
        </form>
      </div>
    );
  }
  
}

export default SearchBar;