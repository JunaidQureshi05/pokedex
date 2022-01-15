import React from 'react';
import './Pokecard.css';
const IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

const padToThree = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;
class Pokecard extends React.Component {
  render() {
    const url = `${IMAGE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokedex-image">
          <img src={url} />
        </div>

        <div className="Pokecard-data">Type: {this.props.type}</div>

        <div className="Pokecard-data">Experience:{this.props.exp}</div>
      </div>
    );
  }
}

export default Pokecard;
