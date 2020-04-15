import React from 'react';
import { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'React.js',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({
      newTech:e.target.value 
    })
    console.log(e.target.value);
  }

  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.newTech);
    this.setState({
      techs: [... this.state.techs, this.state.newTech],
      newTech: ''
    });
  }
  
  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>
        {this.state.techs.map(tech => <li key={tech}>{tech}</li>)}
      </ul>
      <input 
        type="text" 
        onChange={this.handleInputChange} 
        value={this.state.newTech}>        
      </input>
      <button 
        type="submit" 
        onChange={this.handleSubmit} 
        value={this.state.newTech} name="Bla">Enviar</button>
      </ form>
    );
  }
}

export default TechList;