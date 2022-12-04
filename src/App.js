import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      monsters:[],
      searchField:''
    };
    console.log("constructor run")
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => 
      this.setState(()=>{
        return {
           monsters: users
        }
      },()=>{
        console.log(this.state)
      })
    );
  }

  onSearchChange = (e)=>{
    console.log("onSearchChange Run")
    const searchField = e.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {
         searchField
      }
    })
  };

  render(){
    const {monsters,searchField} = this.state;
    const {onSearchChange} = this;

    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);
     });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox className="search-box" placeholder="search monsters" onChangeHandler={onSearchChange}/>
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default App;
