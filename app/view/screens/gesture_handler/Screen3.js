import React from "react";
import {Dimensions, FlatList, LayoutAnimation, StyleSheet, UIManager, View} from "react-native";
import ReanimatedCard from "../../../components/ReanimatedCard";

const { width, height } = Dimensions.get("window");

export default class Screen3 extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            pokemon_data: pokemon_data
        }
    }

    _dismissAction = (pokemon) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        const newList = this.state.pokemon_data.filter((item) => {
            return item.id !== pokemon.id;
        });

        this.setState({
            pokemon_data: newList,
        })
    };

    componentWillMount(): void {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.pokemon_data}
                    renderItem={({ item }) => (
                        <ReanimatedCard
                            item={item}
                            dismissAction={this._dismissAction}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
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