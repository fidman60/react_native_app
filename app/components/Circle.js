import React from 'react';
import {PanGestureHandler} from "react-native-gesture-handler";
import {Animated, Dimensions, View} from "react-native";

const windowWidth = Dimensions.get("window").width;

const circleRadius = 30;
export default class Circle extends Component {
    _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
    _onPanGestureEvent = Animated.event([{nativeEvent: {x: this._touchX}}], { useNativeDriver: true });
    render() {
        return (
            <view style={{flex:1}}>
                <PanGestureHandler
                    onGestureEvent={this._onPanGestureEvent}>
                    <Animated.View style={{
                        height: 150,
                        justifyContent: 'center',
                    }}>
                        <Animated.View
                            style={[{
                                backgroundColor: '#42a5f5', borderRadius: circleRadius, height: circleRadius * 2, width: circleRadius * 2,
                            }, {
                                transform: [{translateX: Animated.add(this._touchX, new Animated.Value(-circleRadius))}]
                            }]}
                        />
                    </Animated.View>
                </PanGestureHandler>
            </view>
        );
    }
}