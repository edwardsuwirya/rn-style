import LoginPage from "./src/features/Login/LoginPage";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import WelcomePage from "./src/features/Welcome/WelcomePage";

export default function App() {
    const fonts = useAppFont();

    if (!fonts) {
        return null;
    }
    return (
        // <MainContainer>
        //   <Text>React Native Components</Text>
        // </MainContainer>
        <SafeAreaProvider>
            <ThemeProvider>
            {/*<WelcomePage/>*/}
            <LoginPage/>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
