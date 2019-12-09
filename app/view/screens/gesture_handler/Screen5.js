import React from "react";
import {Dimensions, StyleSheet} from "react-native";
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import ReanimatedCard from "../../../components/ReanimatedCard";

const { width, height } = Dimensions.get("window");
const {cond, Value, event, add, set, eq, ScrollView, View, interpolate, Extrapolate, diffClamp} = Animated;
const HEADER_HEIGHT = 70;

export default class Screen5 extends React.Component{

    constructor(props){
        super(props);

        this.scrollY = new Animated.Value(0);
        this.diffScrollYClamp = diffClamp(this.scrollY, 0, HEADER_HEIGHT);

    }

    render() {

        const headerY = interpolate(this.diffScrollYClamp, {
            inputRange: [0, HEADER_HEIGHT],
            outputRange: [0, -HEADER_HEIGHT],
            extrapolate: Extrapolate.CLAMP
        });

        return (
            <View style={styles.container}>
                <View style={[styles.header, {transform: [{translateY: headerY}]}]}/>
                <ScrollView
                    style={styles.scrollView}
                    scrollEventThrottle={16}
                    onScroll={event([{nativeEvent: {contentOffset: {y: this.scrollY}}}])}
                >
                    {pokemon_data.map(item => <ReanimatedCard item={item}/>)}
                </ScrollView>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        height: HEADER_HEIGHT,
        backgroundColor: "grey",
        zIndex: 300
    },
    scrollView: {
        paddingTop: HEADER_HEIGHT
    }
});



const pokemon_data = [
    {
        id: 1,
        name: "Bulbasaur",
        pic: require("../../../assets/img/bulbasaur.png"),
    },
    {
        id: 2,
        name: "Weepinbell",
        pic: require("../../../assets/img/weepinbell.png"),
    },
    {
        id: 3,
        name: "Pikachu",
        pic: require("../../../assets/img/pikachu.png"),
    },
    {
        id: 4,
        name: "Charmander",
        pic: require("../../../assets/img/charmander.png"),
    },
    {
        id: 6,
        name: "Meowth",
        pic: require("../../../assets/img/meowth.png"),
    },

    {
        id: 7,
        name: "Absol",
        pic: require("../../../assets/img/absol.png"),
    },
    {
        id: 8,
        name: "Arcanine",
        pic: require("../../../assets/img/arcanine.png"),
    },
    {
        id: 9,
        name: "Blaziken",
        pic: require("../../../assets/img/blaziken.png"),
    },
    {
        id: 10,
        name: "Darkrai",
        pic: require("../../../assets/img/darkrai.png"),
    },
    {
        id: 11,
        name: "Deoxys",
        pic: require("../../../assets/img/deoxys.png"),
    },
    {
        id: 12,
        name: "Dialga",
        pic: require("../../../assets/img/dialga.png"),
    },
    {
        id: 13,
        name: "Empoleon",
        pic: require("../../../assets/img/empoleon.png"),
    },
    {
        id: 14,
        name: "Entei",
        pic: require("../../../assets/img/entei.png"),
    },
    {
        id: 15,
        name: "Groudon",
        pic: require("../../../assets/img/groudon.png"),
    },
    {
        id: 16,
        name: "Gyarados",
        pic: require("../../../assets/img/gyarados.png"),
    },
    {
        id: 17,
        name: "Ho-oh",
        pic: require("../../../assets/img/ho-oh.png"),
    },
    {
        id: 18,
        name: "Kyurem",
        pic: require("../../../assets/img/kyurem.png"),
    },
    {
        id: 19,
        name: "Leafeon",
        pic: require("../../../assets/img/leafeon.png"),
    },
    {
        id: 20,
        name: "Lugia",
        pic: require("../../../assets/img/lugia.png"),
    },
    {
        id: 21,
        name: "Magmortar",
        pic: require("../../../assets/img/magmortar.png"),
    },
    {
        id: 22,
        name: "Manectric",
        pic: require("../../../assets/img/manectric.png"),
    },
    {
        id: 23,
        name: "Metagross",
        pic: require("../../../assets/img/metagross.png"),
    },
    {
        id: 24,
        name: "Salamence",
        pic: require("../../../assets/img/salamence.png"),
    },
    {
        id: 25,
        name: "Samurott",
        pic: require("../../../assets/img/samurott.png"),
    },
    {
        id: 26,
        name: "Scyther",
        pic: require("../../../assets/img/scyther.png"),
    },
    {
        id: 27,
        name: "Skarmory",
        pic: require("../../../assets/img/skarmory.png"),
    },
    {
        id: 28,
        name: "Talonflame",
        pic: require("../../../assets/img/talonflame.png"),
    }
];