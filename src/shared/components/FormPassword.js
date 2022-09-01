import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import {useTheme} from "../context/ThemeContext";
import {Entypo} from '@expo/vector-icons';
import {useState} from "react";

const FormPassword = ({value, onChangeValue, placeholder = ''}) => {
    const theme = useTheme();
    const styles = styling(theme);
    const [hidePass, setHidePass] = useState(true);
    return (
        <View style={[styles.input, styles.inputPasswordContainer]}>
            <TextInput
                secureTextEntry={hidePass}
                placeholder={placeholder}
                onChangeText={onChangeValue}
                value={value}
                style={{width: '100%'}}
            >
            </TextInput>
            <Pressable onPress={() => setHidePass(!hidePass)}>
                <Entypo name={hidePass ? 'eye-with-line' : 'eye'} size={15} color={theme.colors.foreground}/>
            </Pressable>
        </View>
    );
};

const styling = (theme) => StyleSheet.create({
    inputPasswordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 24
    },
    input: {
        height: 40,
        marginLeft: theme.spacing.m,
        marginRight: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderWidth: 1,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        backgroundColor: theme.colors.secondary,
        borderColor: theme.colors.foreground,
        alignItems:'center'
    }
});
export default FormPassword;