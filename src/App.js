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
    highScore: 0,
  }

  shuffleCards = () => {
    return this.setState([
      this.cards = this.state.cards.sort(() => Math.random() - 0.5)
    ]);
  }

  handleClick = (clickedCardId) => {
    console.log('clicked id: ' + clickedCardId)

    for (var i = 0; i < cards.length; i++) {
      if (cards[i].id === clickedCardId) {
        var card = cards[i];
      }
    }
    if (card.clicked) {
      console.log('has been clicked')
      this.shuffleCards()
      return this.setState({
        score: 0
      })
    } else {
      console.log('has not been clicked')
      card.clicked = true
      this.shuffleCards()
      const { score, highScore} = this.state;
      const newScore = score + 1;
      const newHighScore = newScore > highScore ? newScore : highScore;
      return this.setState({
        score: newScore,
        highScore: newHighScore
      })
    }
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highScore={this.state.highScore}>React Memory Game</Header>
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
