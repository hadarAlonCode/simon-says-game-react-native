import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class GameOver extends Component {


    startNewGame = () => {

        this.props.startNewGame()
        this.props.playTheGame()

    }


    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "white" , marginTop: 250, fontSize: 50 }}>Game Over</Text>
                <Text style={{ color: "white" , fontSize: 30, marginTop: 20 }}>SCORE: {this.props.score}</Text>


                <View style={{ marginTop: 270, borderWidth: 2,
                    borderColor: 'black', backgroundColor: "#ffffff96", borderRadius: 20, width: 270 }}>
                    <Button onPress={this.startNewGame} title="New Game" color="black"></Button>
                </View>
            </View>
        );
    }
}

export default GameOver;