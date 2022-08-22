import LoginPage from "../features/Login/LoginPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ROUTE} from "../shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import HomePage from "../features/Home/HomePage";
import {useAuth} from "../shared/hook/UseAuth";
import {useEffect, useState} from "react";
import {View} from "react-native";

const Stack = createNativeStackNavigator();
const AppRouter = () => {
    const {isTokenExist} = useAuth();
    const [initialRoute, setInitialRoute] = useState(null);
    useEffect(() => {
        const onValidToken = async () => {
            try {
                const resp = await isTokenExist();
                if (resp) {
                    setInitialRoute(ROUTE.HOME);
                } else {
                    setInitialRoute(ROUTE.WELCOME);
                }
            } catch (e) {
                setInitialRoute(ROUTE.WELCOME);
            }
        }
        onValidToken();
    }, []);
    return initialRoute !== null ? (
        <Stack.Navigator initialRouteName={initialRoute}>
            {/*<MainContainer>*/}
            {/*<Text>React Native Components</Text>*/}
            {/*</MainContainer>*/}
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.HOME} component={HomePage} options={{headerShown: false}}/>
        </Stack.Navigator>
    ) : (
        <View></View>
    )
};

export default AppRouter;