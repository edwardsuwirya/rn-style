import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import useViewState from "../../shared/hook/UseViewState";
import {useAuth} from "../../shared/hook/UseAuth";
import {Keyboard} from "react-native";
import {ROUTE} from "../../shared/constants";

const useLoginPage = () => {
    const navigation = useNavigation();
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const {viewState, setLoading, setError} = useViewState();
    const {onLogin} = useAuth();
    useEffect(() => {
        setError(null)
    }, [userName, password]);

    const onAuthenticate = async () => {
        Keyboard.dismiss();
        setLoading();
        try {
            if (userName === '' && password === '') {
                throw new Error('Please input your user name and password');
            } else {
                const response = await onLogin({userName: userName, password: password});
                if (response) {
                    navigation.replace(ROUTE.HOME)
                } else {
                    throw new Error('Unauthorized');
                }
            }
        } catch (e) {
            setError(e);
        }
    }
    return {
        viewState, userName, password, onChangeUserName, onChangePassword, onAuthenticate
    }
}
export default useLoginPage;