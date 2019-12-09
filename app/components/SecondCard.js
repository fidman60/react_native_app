import React from "react";
import {Animated, Dimensions, Image, PanResponder, Text, Easing} from "react-native";

const {width} = Dimensions.get('window');

const MAX_DRAG = width / 2;

export default class SecondCard extends React.Component{

    constructor(props){
        super(props);

        this.positionX = new Animated.ValueXY();
    }

    componentWillMount(): void {
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
                console.log("max drag: "+MAX_DRAG);
                console.log(gestureState.dx);
                if (gestureState.dx > 0 && gestureState.dx < MAX_DRAG) Animated.event([null, {dx: this.positionX.x}])(evt, gestureState);
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx < MAX_DRAG){
                    Animated.spring(this.positionX.x, {
                        toValue: 0,
                        friction: 3,
                        duration: 200,
                        useNativeDriver: true
                    }).start();
                } else {
                    Animated.timing(this.positionX.x, {
                        toValue: width,
                        easing: Easing.ease,
                        duration: 200,
                        useNativeDriver: true
                    }).start();

                    this.props.dismissAction(this.props.item);
                }
            },
        });
    }

    render(){
        const {item} = this.props;

        const cardOpacity = this.positionX.x.interpolate({
            inputRange: [0, MAX_DRAG],
            outputRange: [1,.2],
            extrapolate: "clamp",
        });

        return (
            <Animated.View
                style={[styles.card, {transform: [{translateX: this.positionX.x}], opacity: cardOpacity}]}
                {...this._panResponder.panHandlers}
            >
                <Image
                    source={item.pic}
                    style={styles.thumbnail}
                />
                <Text style={styles.name}>{item.name}</Text>
            </Animated.View>
        );
    }

};

const styles = {
    card: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "grey",
        borderBottomColor: "grey",
        marginBottom: 3,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    thumbnail: {
        width: 50,
        height: 50,
    }
};