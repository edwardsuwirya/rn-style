import {Keyboard, StyleSheet, View} from 'react-native';
import {useState} from "react";
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import Entypo from '@expo/vector-icons/Entypo';
import {useTheme} from "../../shared/context/ThemeContext";
import MainContainer from "../../shared/components/MainContainer";
import FormPassword from "../../shared/components/FormPassword";

const LoginPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <MainContainer>
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel titleStyle={theme.text.subtitle2} text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Input your email" onChangeValue={onChangeUserName} value={userName}/>
                    <FormPassword placeholder="Input your password" onChangeValue={onChangePassword}
                                  value={password}/>
                    <FormButton label='Login' onClick={() => {
                        Keyboard.dismiss()
                    }} Icon=<Entypo name="lock-open" style={styles.iconButton}/>/>
                </View>
            </AppBackground>
        </MainContainer>
    );
};

const styling = (theme) => (StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: theme.spacing.m,
        marginBottom: theme.spacing.m,
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    buttonSpace: {
        marginTop: theme.spacing.l
    },
    background: {
        flex: 1,
    },
    iconButton: {
        color: theme.colors.white,
        fontSize: 14,
        marginRight: theme.spacing.s
    }
}));
export default LoginPage;