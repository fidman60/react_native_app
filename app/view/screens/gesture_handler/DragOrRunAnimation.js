import React from "react";
import {Dimensions, StyleSheet, View, Alert, Animated, Easing} from "react-native";
import {PanGestureHandler, State} from "react-native-gesture-handler";
import TabHandler from "./TabHandler";

const { width, height } = Dimensions.get("window");

export default class DragOrRunAnimation extends React.Component{

    pinchRef = React.createRef();
    tabRef = React.createRef();

    constructor(props){
        super(props);
        this._dragX = new Animated.Value(0);
        this._lastTransX = 0;

        this._onGestureEvent = Animated.event([{nativeEvent: {translationX: this._dragX}}]);
        this._onStateChange = ({nativeEvent}) => {
            console.log(nativeEvent);
            if (nativeEvent.state === State.END){
                this._lastTransX += nativeEvent.translationX;
                this._dragX.setOffset(this._lastTransX);
                this._dragX.setValue(0);
                if (nativeEvent.velocityX > 1000){
                    const value = 100 - this._lastTransX;
                    Animated.spring(this._dragX,{
                        toValue: value,
                        friction: 3,
                        duration: 2000,
                        useNativeDriver: true
                    }).start(() => {
                        this._lastTransX += value;
                        this._dragX.setOffset(this._lastTransX);
                    });
                } else if (nativeEvent.velocityX < -1000){
                    const value = -100 - this._lastTransX;
                    Animated.spring(this._dragX,{
                        toValue: value,
                        friction: 3,
                        duration: 2000,
                        useNativeDriver: true
                    }).start(() => {
                        this._lastTransX += value;
                        this._dragX.setOffset(this._lastTransX);
                    });
                }
            }
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <PanGestureHandler
                    onHandlerStateChange={this._onStateChange}
                    onGestureEvent={this._onGestureEvent}
                >
                    <Animated.View
                        style={[styles.box, {transform: [{translateX: this._dragX}]}]}
                    />
                </PanGestureHandler>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    box: {
        width: 100,
        height: 100,
        backgroundColor: "red"
    },
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

