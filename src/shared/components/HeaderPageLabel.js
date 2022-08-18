import React from 'react';
import {Text, View} from "react-native";
import {useTheme} from "../context/ThemeContext";

const HeaderPageLabel = ({text}) => {
    const theme = useTheme();
    return (
        <View>
            <Text style={[theme.text.subtitle, {fontWeight: 'bold'}]}>{text}</Text>
        </View>
    );
};
export default HeaderPageLabel;
