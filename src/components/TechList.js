import React from 'react';
import { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {

  // Should be another way, but doesn't work
  // static defaultProps = {
  //   tech: 'Oculto',
  // };

  state = {
    newTech: '',
    techs: []
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

  handleDelete = (tech) => {
    this.setState({
      techs: this.state.techs.filter(t=> t !== tech)
    });
  }

  // Life Cycle
  // When it appears on the 'screen'
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs)});
    }

  }

  // When something changes
  componentDidUpdate(_, prevState) { // prevProps, prevState
    if (prevState.techs !== this.setState.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs))
    }
  }

  // When it is going to be removed
  componentWillUnmount() {

  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <h1>{this.state.newTech}</h1>
      <ul>        
        {this.state.techs.map(tech => (
          <TechItem 
            key={tech} 
            tech={tech} 
            onDelete={() => this.handleDelete(tech)}
          />
        ))}
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
