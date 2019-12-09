import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated,
    Easing,
    PanResponder
} from "react-native";
import IconButton from "./IconButton";

export default class Card extends React.Component{

    constructor(props){
        super(props);

        this.opacity = new Animated.Value(0);
        this.scale = new Animated.Value(0);
        this.position = new Animated.ValueXY();

        this.state = {
            absolute: false,
        }
    }

    componentWillMount(): void {
        const {startDragging, stopDragging} = this.props;

        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (e, gestureState) => {
                startDragging();
                Animated.parallel([
                    Animated.timing(this.opacity, {
                        toValue: 1,
                        easing: Easing.ease,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.scale, {
                        toValue: 1,
                        easing: Easing.ease,
                        duration: 200,
                        useNativeDriver: true
                    })
                ]).start();
            },
            onPanResponderMove: (e, gesture) => {
                console.log(gesture);
                Animated.event([null, { dx: this.position.x, dy: this.position.y }])(e, gesture);
            },
            onPanResponderRelease: (e, gesture) => {
                stopDragging();
                Animated.parallel([
                    Animated.timing(this.opacity, {
                        toValue: 0,
                        easing: Easing.ease,
                        duration: 200,
                        useNativeDriver: true,
                    }),
                    Animated.timing(this.scale, {
                        toValue: 0,
                        easing: Easing.ease,
                        duration: 200,
                        useNativeDriver: true
                    }),
                    Animated.spring(this.position, {
                        toValue: {x: 0, y:0},
                        friction: 3,
                        useNativeDriver: true,
                    })
                ]).start();
            }
        });
    }

    render(){

        this.cardOpacity = this.opacity.interpolate({
            inputRange: [0,1],
            outputRange: [1,0.5],
            extrapolate: "clamp",
        });

        this.cardScale = this.scale.interpolate({
            inputRange: [0,1],
            outputRange: [1,0.7],
            extrapolate: "clamp",
        });

        const {item} = this.props;
        return (
            <Animated.View
                style={[styles.card, {
                    opacity: this.cardOpacity,
                    transform: [{scale: this.cardScale}, {translateX: this.position.x}, {translateY: this.position.y}]}]
                }
                {...this.panResponder.panHandlers}
            >
                <Image
                    source={item.pic}
                    style={styles.thumbnail}
                    resizeMode="contain"
                />
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.icons}>
                    <IconButton icon="search"/>
                    <IconButton icon="bookmark"/>
                    <IconButton icon="share"/>
                </View>
            </Animated.View>
        );
    }

};

const styles = {
    card: {
        width: 120,
        height: 140,
        backgroundColor: "transparent",
        padding: 10,
        margin: 30,
        alignItems: "center",
        zIndex: 100,
    },
    name: {
        fontSize: 15,
        color: "#333",
        fontWeight: "bold"
    },
    thumbnail: {
        width: 75,
        height: 75
    },
    icons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    }
};