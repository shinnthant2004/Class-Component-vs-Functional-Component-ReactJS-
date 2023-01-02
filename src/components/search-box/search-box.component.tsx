import '../search-box/search-box.style.css';
import { ChangeEvent } from 'react';

type SearchProps = {
  className:string;
  placeholder:string;
  onChangeHandler: (e:ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({className,placeholder,onChangeHandler}:SearchProps) => {
    return (
        <input
      className={className}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}/>
    )
}

export default SearchBox;