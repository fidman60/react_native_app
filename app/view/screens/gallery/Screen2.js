import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import {Transition} from "react-navigation-fluid-transitions";

export default class Screen2 extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Transition anchor="screen">
                    <View style={{backgroundColor: "red", padding: 20}}>
                        <Text style={{textAlign: "center", color: "white"}}>Header</Text>
                    </View>
                </Transition>
                <Transition shared="screen">
                    <Image source={require('../../../assets/nike_shoes.png')} style={styles.image}/>
                </Transition>
                <Transition appear="bottom">
                    <Text>
                        Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.
                        Saraceni tamen nec amici nobis umquam nec hostes optandi, ultro citroque discursantes quicquid inveniri poterat momento temporis parvi vastabant milvorum rapacium similes, qui si praedam dispexerint celsius, volatu rapiunt celeri, aut nisi impetraverint, non inmorantur.
                    </Text>
                </Transition>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        height: 300,
        width: "100%"
    }
});