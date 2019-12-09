import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, Animated, UIManager, LayoutAnimation } from 'react-native';

import { FlatList, RectButton } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const {width} = Dimensions.get('window').width;

class Item extends Component{

    _randerRightAction = (progress, dragX) => {

        const opacity = dragX.interpolate({
            inputRange: [-50, 0],
            outputRange: [1, 0]
        });

        const transY = dragX.interpolate({
            inputRange: [-50, -25, 0],
            outputRange: [0, -40, -80],
        });

        const transGreen = dragX.interpolate({
            inputRange: [-50, -25, 0],
            outputRange: [0, -50, -80],
        });

        const transOrange = dragX.interpolate({
            inputRange: [-50, -25, 0],
            outputRange: [0, -60, -80],
        });

        return (
            <View style={{overflow: "hidden",width: 50,height: 80}}>
                <Animated.View
                    style={{position: "absolute",
                        zIndex: 10,
                        width: 50, height: 80,
                        backgroundColor: "green",
                        transform: [{translateY: transGreen}]
                    }}
                />
                <Animated.View
                    style={{position: "absolute",
                        zIndex: 15,
                        width: 50, height: 80,
                        backgroundColor: "orange",
                        transform: [{translateY: transOrange}]
                    }}
                />
                <Animated.View
                    style={{position: "absolute",zIndex: 20,opacity: opacity, transform: [{translateY: transY}]}}
                >
                    <RectButton
                        onPress={this._onDelete}
                        style={styles.rect}
                    >
                        <View style={styles.addActionBtn}>
                            <Text style={styles.danger}>Del</Text>
                        </View>
                    </RectButton>
                </Animated.View>
            </View>
        )
    };

    _onDelete = () => {
        this.props.deleteItem(this.props.item.id);
    };

    render() {
        const {item} = this.props;

        return (
            <Swipeable
                friction={2}
                overshootRight={false}
                renderRightActions={this._randerRightAction}
            >
                <RectButton
                    onPress={() => Alert.alert("hello bro")}
                    style={styles.rectButton}
                >
                    <View accessible>
                        <Text>{item.from}</Text>
                    </View>
                </RectButton>
            </Swipeable>
        );
    }

}

export default class Example extends Component {

    constructor(props){
        super(props);

        this.state = {
            items: DATA,
        }
    }

    componentWillMount() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    _deleteItem(id){
        LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
        const newList = this.state.items.filter((item) => {
            return item.id !== id;
        });
        this.setState({
            items: newList,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.items}
                    renderItem={({item}) => (
                        <Item item={item} deleteItem={this._deleteItem.bind(this)} />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rectButton: {
        width: width,
        height: 80,
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'column',
        backgroundColor: 'grey',
    },
    rect: {
        backgroundColor: "red",
    },
    addActionBtn: {
        width: 50,
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    separator: {
        backgroundColor: "white",
        height: 5,
    },
    danger: {
        color: "white"
    }
});

const DATA = [
    {
        id: 1,
        from: "D'Artagnan",
        when: '3:11 PM',
        message:
            'Unus pro omnibus, omnes pro uno. Nunc scelerisque, massa non lacinia porta, quam odio dapibus enim, nec tincidunt dolor leo non neque',
    },
    {
        id: 2,
        from: 'Aramis',
        when: '11:46 AM',
        message:
            'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus hendrerit ligula dignissim maximus aliquet. Integer tincidunt, tortor at finibus molestie, ex tellus laoreet libero, lobortis consectetur nisl diam viverra justo.',
    },
    {
        id: 3,
        from: 'Athos',
        when: '6:06 AM',
        message:
            'Sed non arcu ullamcorper, eleifend velit eu, tristique metus. Duis id sapien eu orci varius malesuada et ac ipsum. Ut a magna vel urna tristique sagittis et dapibus augue. Vivamus non mauris a turpis auctor sagittis vitae vel ex. Curabitur accumsan quis mauris quis venenatis.',
    },
    {
        id: 4,
        from: 'Porthos',
        when: 'Yesterday',
        message:
            'Vivamus id condimentum lorem. Duis semper euismod luctus. Morbi maximus urna ut mi tempus fermentum. Nam eget dui sed ligula rutrum venenatis.',
    },
    {
        id: 5,
        from: 'Domestos',
        when: '2 days ago',
        message:
            'Aliquam imperdiet dolor eget aliquet feugiat. Fusce tincidunt mi diam. Pellentesque cursus semper sem. Aliquam ut ullamcorper massa, sed tincidunt eros.',
    },
    {
        id: 6,
        from: 'Cardinal Richelieu',
        when: '2 days ago',
        message:
            'Pellentesque id quam ac tortor pellentesque tempor tristique ut nunc. Pellentesque posuere ut massa eget imperdiet. Ut at nisi magna. Ut volutpat tellus ut est viverra, eu egestas ex tincidunt. Cras tellus tellus, fringilla eget massa in, ultricies maximus eros.',
    },
    {
        id: 7,
        from: "D'Artagnan",
        when: 'Week ago',
        message:
            'Aliquam non aliquet mi. Proin feugiat nisl maximus arcu imperdiet euismod nec at purus. Vestibulum sed dui eget mauris consequat dignissim.',
    },
    {
        id: 8,
        from: 'Cardinal Richelieu',
        when: '2 weeks ago',
        message:
            'Vestibulum ac nisi non augue viverra ullamcorper quis vitae mi. Donec vitae risus aliquam, posuere urna fermentum, fermentum risus. ',
    },
];