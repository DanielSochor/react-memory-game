import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import './App.css';

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
  }

  shuffleCards = () => {
    console.log('suffle cards')
    this.state.cards.sort(() => Math.random() - 0.5);
  }

  handleClick = (image_id) => {
    if (cards[image_id].clicked){
      console.log('has been clicked')
    } else {
      console.log('has not been clicked')
      cards[image_id].clicked = true
    }
    console.log(cards)
    this.shuffleCards()
  }

render() {
  return (
    <Wrapper>
      <Header score={this.state.score} highscore={this.state.highscore}>React Memory Game</Header>
      {this.state.cards.map(card => (
        <Card
          handleClick={this.handleClick}
          key={card.id}
          id={card.id}
          image={card.image}
        />
      ))}
    </Wrapper>
  );
}
}

export default App;
