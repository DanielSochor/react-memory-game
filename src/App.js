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
    highscore: 0
  }

  clickCounter = id => {
    console.log(id);
    this.state.cards.find((id) => {
      console.log("starting count: " + cards[id]);
      cards[id].count = cards[id] + 1;
      console.log("ending count: " + cards[id].count);
      return cards[id].count
    });
    //this.state.cards.sort(() => Math.random() - 0.5)
  }


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>React Memory Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCounter={this.clickCounter}
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
