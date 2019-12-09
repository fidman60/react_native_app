import React from "react";
import {Animated, Dimensions, StyleSheet, View, PanResponder} from "react-native";
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");

export default class Screen1 extends React.Component{

    constructor(props){
        super(props);
        this.position = new Animated.ValueXY();
        this._lastOffset = { x: 0, y: 0 };

        this.position.addListener(value => this._lastOffset = value);

        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                console.log(this._lastOffset);

                this.position.setOffset(this._lastOffset);
                this.position.setValue({x:0, y:0});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this.position.x, dy: this.position.y}
            ]),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View
                    {...this._panResponder.panHandlers}
                    style={[
                        styles.box,
                        {
                            transform: [
                                { translateX: this.position.x },
                                { translateY: this.position.y },
                            ],
                        }
                    ]}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    box: {
        backgroundColor: "tomato",
        width: 160,
        height: 160,
        borderRadius: 80,
        borderColor: "#000"
    },
});