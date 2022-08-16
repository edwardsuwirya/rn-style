import {StyleSheet, TextInput} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const FormInput = ({value, onChangeValue, placeHolder, keyboard = 'default', isPassword = false}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <TextInput
            style={styles.input}
            placeholder={placeHolder}
            onChangeText={onChangeValue}
            value={value}
            keyboardType={keyboard}
            secureTextEntry={isPassword}
        />
    );
};

const styling = (theme) => StyleSheet.create({
    input: {
        height: 40,
        marginLeft: theme.spacing.m,
        marginRight: theme.spacing.m,
        marginTop: theme.spacing.s,
        borderWidth: 1,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        borderColor: theme.colors.foreground,
    }
});
export default FormInput;