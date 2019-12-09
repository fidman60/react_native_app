import React, { Component } from "react";
import { Animated, View, Dimensions } from "react-native";
import { PinchGestureHandler, State } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window"); // used for dealing with image dimensions

export default class PinchableImage extends Component {

    constructor(props) {
        super(props);
        this.baseScale = new Animated.Value(1);
        this.pinchScale = new Animated.Value(1);
        this.scale = Animated.multiply(this.baseScale, this.pinchScale);
        this.lastScale = 1;
        this.imageScale = 0;
    }

    _onPinchHandlerStateChange = event => {

        if (event.nativeEvent.oldState === State.ACTIVE) {
            console.log(event.nativeEvent);
            let currentScale = event.nativeEvent.scale; // the distance travelled by the user's two fingers
            this.lastScale *= event.nativeEvent.scale; // the value we will animated the baseScale to

            console.log("last scale:"+ this.lastScale);
            this.pinchScale.setValue(1); // everytime the handler is triggered, it's considered as 1 scale value

            // the image's new scale value
            let newImageScale =
                currentScale > 0
                    ? this.imageScale + currentScale
                    : this.imageScale - currentScale;

            // next: add code for checking if scale is within range
            if (this.isScaleWithinRange(newImageScale)) {
                Animated.spring(this.baseScale, {
                    toValue: this.lastScale,
                    bounciness: 20,
                    useNativeDriver: true
                }).start();
                this.imageScale = newImageScale; // don't forget to update the imageScale
            } else {
                // next: add code for animating the component if it's not within range
                this.lastScale = 1;
                this.imageScale = 0;
                Animated.spring(this.baseScale, {
                    toValue: 1,
                    bounciness: 20,
                    useNativeDriver: true
                }).start();
            }
        }
    };

    isScaleWithinRange = newImageScale => {
        return newImageScale >= 0.5 && newImageScale <= 5;
    };

    render(){
        return (
            <PinchGestureHandler
                onHandlerStateChange={this._onPinchHandlerStateChange}
            >
                <Animated.Image
                    source={require('../../../assets/img/absol.jpg')}
                    style={[
                        {
                            transform: [{ scale: this.scale }]
                        }
                    ]}
                />
            </PinchGestureHandler>
        );
    }

}