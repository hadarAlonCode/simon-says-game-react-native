import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Buttons from './Buttons';


class Game extends Component {
    render() {
        return (
            <View style={{flexWrap: 'wrap', width:270, height:270, borderRadius: 20}}>
                <View style={{flexWrap: 'wrap', marginLeft:20, marginTop:15 }}>
                {this.props.buttons.map(b=> <Buttons key={b.id} button={b} flickerColor={this.props.flickerColor} userPlay={this.props.userPlay} stopPressButtons={this.props.stopPressButtons} gameSequence={this.props.gameSequence} playSound={this.props.playSound}/>)}
                </View>
            </View>
        );
    }
}

export default Game;