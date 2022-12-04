import '../search-box/search-box.style.css';

const SearchBox = ({className,placeholder,onChangeHandler}) => {
  console.log("search box render")
    return (
        <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}/>
    )
}

export default SearchBox;