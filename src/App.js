
import React, { Component } from 'react';
import "./App.css";
import { CardList } from './components/cardList/card-list.component';
import { SearchBox } from "./components/search-box/search-box.component";


class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users=> this.setState({monsters:users}))
  }

  render(){

    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App' > 
      <h1>Monster Rolodex</h1>
       <SearchBox
       placeholder='search monster'
       handleChange={ e => this.setState({searchField:e.target.value})}       
       /> 
      <CardList monsters={filteredMonsters} />
        
    
     </div>
  );
}
    }
 


export default App;





// class App extends Component{
//   constructor(){
//     super();
//     this.handleClick2 = this.handleClick1.bind(this);
//   }
//   handleClick1(){
//     console.log('button 1 clicked');
//   }
//   handleClick3 = () => console.log('button 3 clicked');
//   render(){
//     return(
//       <div>
//         <button onClick={this.handleClick1()}>Click 1</button>
//         <button onClick={this.handleClick1}>Click 2</button>
//         <button onClick={this.handleClick2}>Click 3</button>
//         <button onClick={this.handleClick3}>Click 4</button>
//       </div>
//     )
//   }
// }