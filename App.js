import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import Game from './src/components/Game';
import GameOver from './src/components/GameOver';
import backgroundImage from "./src/images/background.jpg";

// import Sound from 'react-native-sound';

// import sound1 from "./src/sounds/sound1.mp3"
// import sound2 from "./src/sounds/sound2.mp3"
// import sound3 from "./src/sounds/sound3.mp3"
// import sound4 from "./src/sounds/sound4.mp3"



class App extends Component {
  constructor() {
    super()
    this.state = {
      buttons: [{ color: "#a286d5ad", color2: "#7138d7", id: 1 }, { color: "#5368dfba", color2: "#0026fe", id: 2 }, { color: "#0ae9ffa3", color2: "#2ff3ff", id: 3 }, { color: "#befeb3ad", color2: "#19ff0a", id: 4 }],
      gameSequence: [],
      playerSequence: [],
      flickerColor: 0,
      score: 0,
      bestScore: 0,
      clickNumber: 0,
      gameOver: false,
      stopPressButtons: true
    }
  }


  // Push new color into the game's color array
  playTheGame = async () => {

    await this.setState({ stopPressButtons: true }, function () {

    })
    let color = this.state.buttons[Math.floor(Math.random() * this.state.buttons.length)];
    tempGameSequence = [...this.state.gameSequence]
    tempGameSequence.push(color.id)


    await this.setState({
      gameSequence: tempGameSequence
    })

    this.playTheSequence()
  }


  playTheSequence = async () => {
    var i = 0;

    this.intervalId = setInterval(async () => {
      await this.setState({ flickerColor: this.state.gameSequence[i] }, function () {

      })

      setTimeout( async () => {
        await this.setState({ flickerColor: 0 }, function () {

        });
      }, 500);

      i++;

      if (i >= this.state.gameSequence.length) {

        clearInterval(this.intervalId);
        setTimeout(() => this.setState({ flickerColor: 0, stopPressButtons: false }, function () {
          
        }), 500);
      }

    }, 1000);


  }


  userPlay = async (id) => {

    if (id === this.state.gameSequence[this.state.clickNumber]) {

      let tempPlayerSequence = [...this.state.playerSequence]
      tempPlayerSequence.push(id)

      await this.setState({
        playerSequence: tempPlayerSequence
      })



      if (JSON.stringify(this.state.playerSequence) === JSON.stringify(this.state.gameSequence)) {

        await this.setState({
          playerSequence: [],
          clickNumber: 0,
          score: this.state.score + 1
        })

        this.playTheGame()

      } else {

        return (
          this.setState({
            clickNumber: this.state.clickNumber + 1
          })
        )
      }


    } else {
      this.setState({
        gameSequence: [],
        playerSequence: [],
        gameOver: true,
        clickNumber: 0
      })
    }
  }

  startNewGame = () => {
    this.setState({
      gameOver: false,
      score: 0
    })
  }




  render() {

    return (

// GameOver Screen
      this.state.gameOver ?
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <GameOver score={this.state.score} playTheGame={this.playTheGame} startNewGame={this.startNewGame} />
        </ImageBackground>

        :

// Game Screen
        <ImageBackground source={backgroundImage} style={{ width: '100%', height: '100%' }}>
          <View style={{ justifyContent: 'center', flex: 1 }}>

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
              <Text style={{ marginBottom: 20, fontSize: 40, color: "white" }}>Simon Says</Text>
              <Text style={{ marginTop: 5, fontSize: 25, color: "white" }}>Score: {this.state.score ? this.state.score : 0} </Text>
            </View>

            <View style={{ alignItems: 'center', flex: 2 }}>
              <Game buttons={this.state.buttons} flickerColor={this.state.flickerColor} userPlay={this.userPlay} stopPressButtons={this.state.stopPressButtons} gameSequence={this.state.gameSequence} />
            </View>


{/*Play Button */}
            {!this.state.gameSequence.length ?
              <View style={{
                marginBottom: 60, marginLeft: 70, borderWidth: 2,
                borderColor: 'black', backgroundColor: "#ffffff96", borderRadius: 20, width: 270
              }}>
                <Button onPress={this.playTheGame} title="Play" color="black"  ></Button>
              </View>
              : null}

          </View>
        </ImageBackground>
    );
  }
}

export default App;


