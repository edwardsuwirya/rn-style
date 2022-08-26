import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import {serviceFactory} from "./src/services/ServiceFactory";
import {DependencyProvider} from "./src/shared/context/DependencyContext";
import ProductList from "./src/features/Product/ProductList";

export default function App() {
    const fonts = useAppFont();
    const services = serviceFactory();
    if (!fonts) {
        return null;
    }
    return (
        <DependencyProvider services={services}>
            <SafeAreaProvider>
                <ThemeProvider>
                    {/*<MainContainer>*/}
                    {/*<Text>React Native Components</Text>*/}
                    {/*</MainContainer>*/}
                    {/*<WelcomePage/>*/}
                    {/*<LoginPage/>*/}
                    <ProductList/>
                </ThemeProvider>
            </SafeAreaProvider>
        </DependencyProvider>
    );
}
