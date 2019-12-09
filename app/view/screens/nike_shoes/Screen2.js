import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

export default class Screen2 extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.container}
                onPress={()=> this.props.navigation.goBack()}
            >
                <Transition shared="paper">
                    <View style={styles.paper}/>
                </Transition>
                <Text style={styles.price}>$ 299</Text>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>THE TEN</Text>
                    <Text style={styles.subheader}>AIR JORDAN I</Text>
                </View>
                <View style={styles.smallImageContainer}>
                    <View style={styles.smallImageWrapper}>
                        <Image
                            style={styles.smallImage}
                            source={require('../../../assets/nike_shoes.png')}
                        />
                    </View>
                    <View style={styles.smallImageWrapper}>
                        <Image
                            style={styles.smallImage}
                            source={require('../../../assets/nike_shoes.png')}
                        />
                    </View>
                </View>
                <Transition shared="shoe">
                    <Image
                        style={styles.shoe}
                        source={require('../../../assets/nike_shoes.png')}
                    />
                </Transition>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C14534',
    },
    price: {
        color: '#FFF',
        fontSize: 34,
        fontFamily: 'Bebas Neue',
        textAlign: 'center',
        paddingTop: -55 + Dimensions.get('window').height * 0.5,
    },
    headerContainer: {
        paddingTop: 40,
    },
    header: {
        color: '#444',
        fontSize: 42,
        textAlign: 'center',
        fontFamily: 'Bebas Neue',
        marginBottom: -6,
    },
    subheader: {
        color: '#444',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'Bebas Neue',
    },
    paper: {
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        left: 0,
        top: Dimensions.get('window').height * 0.5,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 70,
        padding: 10,
    },
    shoe: {
        width: 291,
        height: 200,
        position: 'absolute',
        left: Dimensions.get('window').width * 0.5 - (291 / 2),
        top: 60,
    },
    smallImageContainer: {
        position: 'absolute',
        left: 0,
        top: Dimensions.get('window').height * 0.54,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    smallImageWrapper: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        paddingTop: 25,
        paddingBottom: 25,
    },
    smallImage: {
        width: 100,
        height: 70,
    },
});