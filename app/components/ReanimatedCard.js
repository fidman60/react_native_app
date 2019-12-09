import React from "react";
import {Dimensions, Image, Text} from "react-native";
import Animated from 'react-native-reanimated';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const {cond, Value, event, eq, add, set} = Animated;

const {width} = Dimensions.get('window');

const MAX_DRAG = width / 2;

export default class ReanimatedCard extends React.Component{

    render() {
        const {item} = this.props;
        return (
            <Animated.View
                style={[styles.card]}
            >
                <Image
                    source={item.pic}
                    style={styles.thumbnail}
                />
                <Text style={styles.name}>{item.name}</Text>
            </Animated.View>
        );
    }

}

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