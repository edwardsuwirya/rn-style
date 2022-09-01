import {Keyboard, StyleSheet, View} from 'react-native';
import {useState} from "react";
import FormInput from "../../shared/components/FormInput";
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import MainContainer from "../../shared/components/MainContainer";
import FormPassword from "../../shared/components/FormPassword";

const LoginPage = () => {
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <MainContainer>
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel subTitle text='Welcome!'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Input your email" onChangeValue={onChangeUserName} value={userName}/>
                    <FormPassword placeholder="Input your password" onChangeValue={onChangePassword}
                                  value={password}/>
                    <FormButton label='Login' onClick={() => {
                        Keyboard.dismiss()
                    }}/>
                </View>
            </AppBackground>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16,
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    background: {
        flex: 1,
    },
});
export default LoginPage;