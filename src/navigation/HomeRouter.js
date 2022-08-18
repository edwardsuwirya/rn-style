import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PageA from "../features/Home/PageA/PageA";
import PageB from "../features/Home/PageB/PageB";
import {Ionicons} from '@expo/vector-icons';
import {ROUTE} from "../shared/constants";
import {useTheme} from "../shared/context/ThemeContext";

const Tab = createBottomTabNavigator();
const HomeRouter = () => {
    const theme = useTheme()
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                switch (route.name) {
                    case ROUTE.PAGE_A:
                        return <Ionicons name='home' size={size} color={color}/>;
                    case ROUTE.PAGE_B:
                        return <Ionicons name='cash-outline' size={size} color={color}/>;
                    default:
                        return <Ionicons name='checkmark-sharp' size={size} color={color}/>;
                }
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: theme.colors.foreground,
        })}>
            <Tab.Screen name={ROUTE.PAGE_A} component={PageA} options={{headerShown: false}}/>
            <Tab.Screen name={ROUTE.PAGE_B} component={PageB} options={{headerShown: false}}/>
        </Tab.Navigator>
    );
};

export default HomeRouter;