import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Pressable} from 'react-native';
import {useState} from "react";
import MainContainer from "../../shared/components/MainContainer";
import {Entypo} from '@expo/vector-icons';

const LoginPage = () => {
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [hidePass, setHidePass] = useState(true);
    return (
        <MainContainer>
            <ImageBackground source={require('../../../assets/img/background.jpg')} resizeMode="cover"
                             style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome!</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        keyboardType={'email-address'}
                        style={styles.input}
                        placeholder="Input your email"
                        onChangeText={onChangeUserName}
                        value={userName}
                    />
                    <View style={[styles.input,styles.inputPasswordContainer]}>
                        <TextInput
                            secureTextEntry={hidePass}
                            placeholder="Input your password"
                            onChangeText={onChangePassword}
                            value={password}
                            style={{width:'100%'}}
                        >
                        </TextInput>
                        <Pressable onPress={() => {
                            setHidePass(!hidePass)
                        }}>
                            <Entypo name={hidePass ? 'eye-with-line' : 'eye'} size={15} color="grey"/>
                        </Pressable>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            Keyboard.dismiss()
                        }}
                    >
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    inputPasswordContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:24
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'rgb(92,93,95)'
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgb(252,80,40)",
        padding: 10,
        borderRadius: 12,
        alignSelf: 'stretch',
        margin: 16,
    },
    textButton: {
        color: '#fff'
    },
    input: {
        height: 40,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: '#999',
        backgroundColor: 'rgb(234,235,240)'
    },
    background: {
        flex: 1,
    },
});
export default LoginPage;