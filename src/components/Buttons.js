import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Animated } from 'react-native';


class Buttons extends Component {


    userClick = () => {
        this.props.userPlay(this.props.button.id)        
    }


    render() {

        return (

            <View  >
                <TouchableOpacity  onPress={this.props.stopPressButtons ? this.userClick : null } style={{
                    backgroundColor: this.props.flickerColor === this.props.button.id ?
                        this.props.button.color2 :
                        this.props.button.color,
                    padding: 50,
                    margin: 6,
                    borderBottomLeftRadius: this.props.button.id == 2 ?
                        "320px" : this.props.button.id == 1 ? '20px' : this.props.button.id == 3 ?
                            '20px' : this.props.button.id == 4 ?
                                "20px" : null,

                    borderBottomRightRadius: this.props.button.id == 4 ?
                        '320px' : this.props.button.id == 1 ? '20px' : this.props.button.id == 3 ?
                            '20px' : this.props.button.id == 2 ?
                                '20px' : null,

                    borderTopRightRadius: this.props.button.id == 3 ?
                        "320px" : this.props.button.id == 1 ? '20px' : this.props.button.id == 4 ?
                            "20px" : this.props.button.id == 2 ?
                                '20px' : null,

                    borderTopLeftRadius: this.props.button.id == 1 ?
                        "320px" : this.props.button.id == 3 ?
                            '20px' : this.props.button.id == 2 ?
                                '20px' : this.props.button.id == 4 ?
                                    "20px" : null,
                }}>
                </TouchableOpacity>
            </View>

        );
    }
}

export default Buttons;