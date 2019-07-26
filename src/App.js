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
  }

  handleClick = (image_id, hasBeenClicked) => {
    if (cards[image_id].clicked){
      console.log('hasbeenclicked')
    } else {
      console.log(cards[image_id].clicked);
      cards[image_id].clicked = true
      console.log(cards[image_id].clicked);
    }
    this.shuffleCards()
  }

  clickCounter = id => {
    console.log(id);
    //console.log(this.state.Card.clickCount)
    //loop through cards
    //then check click matches
    //retunr statements 
    //for (i=0; i<this.state.cards.length; i++){

    //}




      //this.state.cards.find((card) => {
        //if (c)
          //if (card(id).clickCount < 1) {



            //console.log('starting count: ' + cards[id]);
           // cards[id].count = cards[id] + 1;
            //console.log('ending count: ' + cards[id].count);
            //return cards[id].count
            //this.state.cards.sort(() => Math.random() - 0.5)
         // });
  //} else {
  //console.log('this has already been picked')
//}
  }
//this is reference ot the class we're in
//we're looping through all the cards in the current state
//finding the card that matches the id from that which was clicked



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
