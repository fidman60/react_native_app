import React, { Component } from "react";
import { TouchableWithoutFeedback, Animated, Easing } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const icon_color = "#586069";
const icon_size = 15;

type Props = {};
export default class IconButton extends Component<Props> {
    render() {
        const {icon} = this.props;

        return (
            <TouchableWithoutFeedback>
                <Icon
                    name={icon}
                    style={styles.icon}
                    size={icon_size}
                    color={icon_color}
                />
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    icon: {
        paddingLeft: 5,
        paddingRight: 5
    }
};
