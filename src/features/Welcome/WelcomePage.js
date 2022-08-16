import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LottieView from 'lottie-react-native';

const WelcomePage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../../assets/img/background.jpg')} resizeMode="cover"
                             style={styles.background}>
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/67221-food-market-app-interaction.json')}
                />
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>POS System</Text>
                    <Text style={styles.subtitle}>Simple Point Of Sales</Text>
                </View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{}}
                >
                    <Text style={styles.textButton}>Sign In</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems:'center'
    },
    titleContainer: {
        alignItems: "center",
    },
    button: {
        alignItems: "center",
        backgroundColor: "rgb(252,80,40)",
        padding: 10,
        borderRadius:5,
        alignSelf:'stretch',
        margin:16
    },
    textButton:{
        color:'#fff'
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: 'rgb(92,93,95)'
    },
    subtitle: {
        fontSize: 16,
        color: 'rgb(92,93,95)'
    }
});
export default WelcomePage;