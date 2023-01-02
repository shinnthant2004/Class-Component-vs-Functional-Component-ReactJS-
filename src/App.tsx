import './App.css';

import { ChangeEvent, useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

export type Monster = {
  id:string;
  name:string;
  email:string;
}

const App = () => {

  const [searchField,setSearchField] = useState('');
  const [monsters,setMonsters] = useState <Monster[]>([]);
  const [filterMonsters,setFilterMonsters] = useState(monsters);

  useEffect(()=>{
    const fetchUsers = async () => {
       const monsters = await getData <Monster[]>('https://jsonplaceholder.typicode.com/users');
       setMonsters(monsters);
    };
    fetchUsers();
  },[]);

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  },[monsters,searchField])

  const onSearchChange = (e:ChangeEvent<HTMLInputElement>):void =>{
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
