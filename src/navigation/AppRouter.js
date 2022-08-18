import LoginPage from "../features/Login/LoginPage";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ROUTE} from "../shared/constants";
import WelcomePage from "../features/Welcome/WelcomePage";
import HomePage from "../features/Home/HomePage";


const Stack = createNativeStackNavigator();
const AppRouter = () => {
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            {/*<MainContainer>*/}
            {/*<Text>React Native Components</Text>*/}
            {/*</MainContainer>*/}
            <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} options={{headerShown: false}}/>
            <Stack.Screen name={ROUTE.HOME} component={HomePage} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default AppRouter;