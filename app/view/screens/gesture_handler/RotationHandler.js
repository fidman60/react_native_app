import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {RotationGestureHandler, State} from "react-native-gesture-handler";
import Animated from 'react-native-reanimated';

const { width, height } = Dimensions.get("window");
const {event, Value, interpolate, cond, add, set, eq, block, concat} = Animated;

export default class RotationHandler extends React.Component{

    constructor(props){
        super(props);
        this._rotate = new Value(0);
        this._offsetRotate = new Value(0);

        this._handleRotate = event([{
            nativeEvent: ({rotation: r, state}) => (
                block([
                    set(this._rotate, add(this._offsetRotate, r)),
                    cond(eq(state, State.END), [set(this._offsetRotate, add(r, this._offsetRotate))])
                ])
            )
        }]);
    }

    render() {

        return (
            <View style={styles.container}>
                <RotationGestureHandler
                    onGestureEvent={this._handleRotate}
                    onHandlerStateChange={this._handleRotate}
                >
                    <Animated.View
                        style={[styles.box, {transform: [{ perspective: 200 }, {rotate: concat(this._rotate, 'rad')}]}]}
                    />
                </RotationGestureHandler>
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
        width: 200,
        height: 200,
        backgroundColor: "red"
    }
});

