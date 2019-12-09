import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Screen1 extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Screen1",
            headerStyle: {
                backgroundColor: "orange",
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: "white",
            },
        };
    };

    _onPress = () => {
        return this.props.navigation.navigate("Screen2",{screenNumber: 1});
    };

    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>{"1"}</Text>
                <TouchableOpacity
                    onPress={this._onPress}
                >
                    <Text style={styles.text}>{"Go forward"}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.text}>{"reset"}</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey"
    },
    text: {
        fontSize: 35,
        color: "white"
    }
});