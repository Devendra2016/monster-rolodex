import logo from './logo.svg';
import './App.css';
import react, { Component } from 'react';
import CardList from './compoents/CardlList/CardList'
import './compoents/CardlList/card-list.css';
import SearchBox from './compoents/Search-Box/SearchBox';
const url='https://jsonplaceholder.typicode.com/users'
class App extends Component {
  constructor()
  {
    super();
    this.state ={
    monsters:[],
    searchField:''
                }
  }
  componentDidMount()
  {
    fetch(url)
    .then(response=>response.json())
    .then(users=>this.setState({monsters:users}))
    .catch(err=>console.log(err))
  }
  render(){
    const {monsters , searchField}=this.state;
    const filteredMonsters=monsters.filter(monster=>monster.name.toLowerCase()
    .includes(searchField.toLowerCase()));

    return(
      <div className='App'>
        <h1>Monstor Rolodex</h1>
        <SearchBox  handleChange={event=>this.setState({searchField:event.target.value})}
         placeholder='SearchBox'/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App;
