import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import FormButton from "../../shared/components/FormButton";
import TitleLabel from "../../shared/components/TitleLabel";
import AppBackground from "../../shared/components/AppBackground";
import {ROUTE} from "../../shared/constants";
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";

const WelcomePage = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container} accessibilityHint='Page_Welcome'>
            <AppBackground style={{
                justifyContent: "space-evenly",
                alignItems: 'center'
            }}>
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/67221-food-market-app-interaction.json')}
                />
                <View style={styles.titleContainer}>
                    <TitleLabel text='POS System'/>
                    <TitleLabel subTitle text='Simple Point Of Sales'/>
                </View>
                <FormButton label='Sign In' onClick={() => {
                    navigation.replace(ROUTE.LOGIN)
                }}></FormButton>
            </AppBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: "center",
    },
});
export default WelcomePage;