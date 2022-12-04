import { Component } from "react";
import '../search-box/search-box.style.css';

class SearchBox extends Component {
 render(){
  console.log("search box render")
    return (
        <input
      className={this.props.className}
      type='search'
      placeholder={this.props.placeholder}
      onChange={this.props.onChangeHandler}/>
    )
 }
}

export default SearchBox;