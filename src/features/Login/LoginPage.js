import {StyleSheet, View} from 'react-native';
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import Entypo from '@expo/vector-icons/Entypo';
import {useTheme} from "../../shared/context/ThemeContext";
import Spinner from "../../shared/components/Spinner";
import Snackbar from "../../shared/components/Snackbar";
import useLoginPage from "./UseLoginPage";
import MainContainer from "../../shared/components/MainContainer";

const LoginPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const {viewState, userName, password, onChangeUserName, onChangePassword, onAuthenticate} = useLoginPage();
    return (
        <MainContainer hint='Page_Login'>
            {viewState.isLoading && <Spinner/>}
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel titleStyle={theme.text.subtitle2} text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Input your email" onChangeValue={onChangeUserName} value={userName}/>
                    <FormInput isPassword placeholder="Input your password" onChangeValue={onChangePassword}
                               value={password}/>
                    <FormButton label='Login' style={styles.buttonSpace} onClick={onAuthenticate} Icon=<Entypo
                                name="lock-open" style={styles.iconButton}/>/>
                </View>
            </AppBackground>
            {viewState.error !== null && <Snackbar message={viewState.error.message}/>}
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