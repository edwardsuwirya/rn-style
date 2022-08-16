import LoginPage from "./src/features/Login/LoginPage";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";

export default function App() {
    const fonts = useAppFont();

    if (!fonts) {
        return null;
    }
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
