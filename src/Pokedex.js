import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedexcards.css';
class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        <h4>Total Experience: {this.props.exp}</h4>
        {title}
        <div className="Pokedex-cards">
          {' '}
          {this.props.pokemons.map(({ name, type, base_experience, id }) => (
            <Pokecard
              key={id}
              name={name}
              type={type}
              exp={base_experience}
              id={id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
