import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Screen3 extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Screen3",
            headerStyle: {
                backgroundColor: "grey",
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                color: "white",
            },
        };
    };

    _onResetPress = () => {
        return this.props.navigation.navigate("Screen1", {reset: true});
    };

    render() {
        console.log(this.props.navigation.state);
        return (
            <View style={styles.main_container}>
                <Text style={styles.text}>{"3"}</Text>
                <TouchableOpacity>
                    <Text style={styles.text}>{"Go forward"}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text onPress={this._onResetPress} style={styles.text}>{"reset"}</Text>
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
        backgroundColor: "red"
    },
    text: {
        fontSize: 35,
        color: "white"
    }
});