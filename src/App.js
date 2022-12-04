import './App.css';

import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  console.log("app render");

  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState([]);
  const [filterMonsters,setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
        setMonsters(users)
    );
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (e)=>{
    const searchValue = e.target.value.toLocaleLowerCase();
    setSearchField(searchValue);
  };



  return (
          <div className="App">
            <h1 className='app-title'>Monster Rolodex</h1>
            <SearchBox className="search-box" placeholder="search monsters" onChangeHandler={onSearchChange}/>
            <CardList monsters = {filterMonsters} />
          </div>
        )
}

export default App;
