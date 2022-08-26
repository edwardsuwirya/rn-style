import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import {NavigationContainer} from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";
import {serviceFactory} from "./src/services/ServiceFactory";
import {DependencyProvider} from "./src/shared/context/DependencyContext";
import {View} from "react-native";
import {apiClientFactory} from "./src/shared/ApiClientFactory";
import {clientInstance} from "./src/shared/AxiosClient";
import {hideAsync, preventAutoHideAsync} from "expo-splash-screen";
import {useCallback, useEffect, useState} from "react";


export default function App() {
    const [appIsReady, setAppIsReady] = useState(false);
    const [services, setServices] = useState(null);
    const fonts = useAppFont();
    useEffect(() => {
        const prepare = async () => {
            try {
                await preventAutoHideAsync();
                const apiClient = apiClientFactory(clientInstance);
                const services = serviceFactory(apiClient);
                setServices(services);
                if (fonts) {
                    setAppIsReady(true);
                }
            } catch (e) {
                console.warn(e);
            }
        }
        prepare();
    }, [fonts]);
    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }
    return (
        <View style={{flex: 1}} onLayout={onLayoutRootView}>
            <DependencyProvider services={services}>
                <SafeAreaProvider>
                    <ThemeProvider>
                        <NavigationContainer>
                            <AppRouter/>
                        </NavigationContainer>
                    </ThemeProvider>
                </SafeAreaProvider>
            </DependencyProvider>
        </View>
    );
}
