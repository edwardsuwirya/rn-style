import WelcomePage from "./src/features/Welcome/WelcomePage";
import MainContainer from "./src/shared/components/MainContainer";
import {StatusBar, Text} from "react-native";
import LoginPage from "./src/features/Login/LoginPage";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeProvider} from "./src/shared/context/ThemeContext";

export default function App() {
    return (
        // <MainContainer>
        //   <Text>React Native Components</Text>
        // </MainContainer>
        <SafeAreaProvider>
            <ThemeProvider>
            <WelcomePage/>
            {/*<LoginPage/>*/}
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
