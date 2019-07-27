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
    //console.log('pre shuffled cards: ');
    //console.log(cards);
    //console.log('suffle cards');
    //var newCards = this.state.cards.sort(() => Math.random() - 0.5);
    //console.log('shuffled array is: ' + newCards)
    return this.setState([
      this.cards = this.state.cards.sort(() => Math.random() - 0.5)
    ]);
    //console.log('post shuffled cards: ');
    //console.log(cards);
    //this.displayCards(newCards);
  }

  handleClick = (clickedCardId) => {
    //var image_id = id
    console.log('clicked id: ' + clickedCardId)
    console.log('clicked card: ' + cards[clickedCardId].id)
    for (var i = 0; i < cards.length; i++) {
      //console.log(cards[i].id, cards[i].clicked)
      if (cards[clickedCardId].id === clickedCardId) {
        console.log('clicked card is: ' + cards[clickedCardId].id)
      }
    }
    if (cards[clickedCardId].clicked) {
      console.log('has been clicked')
      this.shuffleCards()
    } else {
      console.log('has not been clicked')
      cards[clickedCardId].clicked = true
      this.shuffleCards()
    }
    //this.displayCards()
  }

  //displayCards = (Cards) => {
  //console.log(Cards);
  //for( var i=0; i<newCards.length; i++){
  //   console.log(cards[i].id, newCards[i].clicked)
  //}
  //}
  //CARS ARE DISPLAYING CORRECTLY

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
