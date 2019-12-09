import React from 'react';
import {View, ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

export default class Screen1 extends React.Component{

    _handlePress = () => {
        this.props.navigation.navigate('screen2');
    };

    render() {
        return (
            <ScrollView style={styles.main_container}>
                <View style={styles.row}>
                    <Transition shared="screen">
                        <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                            <Image resizeMode="cover" source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                        </TouchableOpacity>
                    </Transition>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={this._handlePress}>
                        <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    item: {
        flex: 1,
        marginLeft: 2,
        height: 120,
    },
    image: {
        height: "100%",
        width: "100%"
    }
});