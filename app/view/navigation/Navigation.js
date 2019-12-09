import {createStackNavigator, createAppContainer} from "react-navigation";
import {Animated, Easing} from 'react-native';
import Screen1 from "../screens/gesture_handler/Screen1";
import Screen3 from "../screens/gesture_handler/Screen3";
import Screen4 from "../screens/gesture_handler/Screen4";
import Screen5 from "../screens/gesture_handler/Screen5";
import LongPress from "../screens/gesture_handler/LongPress";
import RotationHandler from "../screens/gesture_handler/RotationHandler";
import PinchScale from "../screens/gesture_handler/PinchScale";
import DragHandler from "../screens/gesture_handler/DragHandler";
import FlingHandler from "../screens/gesture_handler/FlingHandler";
import TabHandler from "../screens/gesture_handler/TabHandler";
import DragOrRunAnimation from "../screens/gesture_handler/DragOrRunAnimation";
import Example from "../screens/gesture_handler/Example";
import {FluidNavigator} from "react-navigation-fluid-transitions";
import PinchableImage from "../screens/pinch/PinchableImage";


/*
const RootNavigator = createStackNavigator({
    Screen1: {
        screen: Screen1,
    },
    Screen2: {
        screen: Screen2,
    },
    Screen3: {
        screen: Screen3,
    },
},{
    initialRouteName: "Screen1",
    transitionConfig: () => {
        return {
            transactionSpec: {
                duration: 2000,
                fraction: 4,
                timing: Animated.spring,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {

                console.log(sceneProps);
                const { layout, position, scene, index, scenes } = sceneProps;
                const thisSceneIndex = scene.index; // the index of the current screen
                const height = layout.initHeight; // the width of the current screen

                const thisSceneParams = scene.route.params || {};
                const lastSceneIndex = scenes[scenes.length - 1].index;

                const translateY = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [height, 0],
                    extrapolate: "clamp" // clamp so it doesn't go beyond the outputRange. Without this, you'll see a few black portions in the screen while navigating
                });

                const scale = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [5, 1],
                    extrapolate: "clamp" // clamp so it doesn't go beyond the outputRange. Without this, you'll see a few black portions in the screen while navigating
                });

                const opacity = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [0,1],
                    extrapolate: "clamp"
                });

                const radius = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [50,0],
                    extrapolate: "clamp"
                });

                console.log("current index: "+thisSceneIndex);
                console.log("to index: "+index);

                if (lastSceneIndex - index > 1){
                    if (thisSceneIndex === index + 1) return {transform: [{translateY}],};
                    if(thisSceneIndex !== index) return {opacity: 0};
                }

                return {transform: [{translateY}],}
            }
        }
    }
});
*/

const RootNavigator = FluidNavigator({
    screen1: {screen: Screen1},
    screen3: {screen: Screen3},
    screen4: {screen: Screen4},
    screen5: {screen: Screen5},
    longPress: {screen: LongPress},
    pinchScale: {screen: PinchScale},
    rotationHandler: {screen: RotationHandler},
    dragHandler: {screen: DragHandler},
    flingHandler: {screen: FlingHandler},
    tabHandler: {screen: TabHandler},
    runningAnimation: {screen: DragOrRunAnimation},
    example: {screen: Example},
}, {
    initialRouteName: 'example'
});

export default createAppContainer(RootNavigator);