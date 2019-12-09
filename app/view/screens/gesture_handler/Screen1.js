import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import Animated from "react-native-reanimated";
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const { width, height } = Dimensions.get("window");
const {Value, add, eq, cond, event, set, interpolate, call, Extrapolate} = Animated;

export default class Screen1 extends React.Component{

    constructor(props){
        super(props);

        this._onDrop = this._onDrop.bind(this);

        this.dragX = new Value(0);
        this.dragY = new Value(0);
        this.offsetX = new Value(width / 2 - 80);
        this.offsetY = new Value(height / 2 - 80);
        this.gestureState = new Value(-1);

        this._onGestureEvent = event([{
            nativeEvent: {
                translationX: this.dragX,
                translationY: this.dragY,
                state: this.gestureState,
            },
        }]);

        const addX = add(this.offsetX, this.dragX);
        const addY = add(this.offsetY, this.dragY);

        this.transX = cond(
            eq(this.gestureState, State.ACTIVE),
            addX,
            set(this.offsetX, addX),
        );

        this.transY = cond(eq(this.gestureState, State.ACTIVE), addY, [
            cond(eq(this.gestureState, State.END), call([addX, addY], this._onDrop)),
            set(this.offsetY, addY),
        ]);
    }

    _onDrop([x, y]) {
        if (x >= this.left && x <= this.right && (y >= this.top && y <= this.bottom)) {
            alert("You dropped it in the zone!");
        }
    }

    saveDropZone = e => {
        const { width, height, x, y } = e.nativeEvent.layout;
        this.top = y;
        this.bottom = y + height;
        this.left = x;
        this.right = x + width;
    };

    render() {
        const opacity = interpolate(this.transY, {
            inputRange: [0, height],
            outputRange: [0.2, 1],
        });

        const border = interpolate(this.transX, {
            inputRange: [0, width],
            outputRange: [1, 10],
        });

        return (
            <View style={styles.container}>
                <View
                    style={styles.dropZone}
                    onLayout={this.saveDropZone}
                />
                <PanGestureHandler
                    maxPointers={1}
                    onGestureEvent={this._onGestureEvent}
                    onHandlerStateChange={this._onGestureEvent}
                >
                    <Animated.View
                        style={[styles.box,{opacity,borderColor: "black", borderWidth: border, transform: [{translateX: this.transX},{translateY: this.transY}]}]}
                    />
                </PanGestureHandler>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box: {
        backgroundColor: "tomato",
        width: 160,
        height: 160,
        borderRadius: 80,
        borderColor: "#000",
        position: "absolute",
    },
    dropZone: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0,0,0,.2)",
        height: "50%",
    },
});