import WelcomePage from "./src/features/Welcome/WelcomePage";
import MainContainer from "./src/shared/components/MainContainer";
import {StatusBar, Text} from "react-native";
import LoginPage from "./src/features/Login/LoginPage";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";

export default function App() {
    const fonts = useAppFont();
    return (
        <ThemeProvider>
            {/*<MainContainer>*/}
            {/*<Text>React Native Components</Text>*/}
            {/*</MainContainer>*/}
            {/*<WelcomePage/>*/}
            <LoginPage/>
        </ThemeProvider>
    );
}
