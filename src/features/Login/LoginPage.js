import {ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useState} from "react";

const LoginPage = () => {
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/img/background.jpg')} resizeMode="cover"
                             style={styles.background}>
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome!</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Input your email"
                        onChangeText={onChangeUserName}
                        value={userName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Input your password"
                        onChangeText={onChangePassword}
                        value={password}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                        }}
                    >
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
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