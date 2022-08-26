import WelcomePage from "./src/features/Welcome/WelcomePage";
import MainContainer from "./src/shared/components/MainContainer";
import {StatusBar, Text} from "react-native";
import LoginPage from "./src/features/Login/LoginPage";
import {SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
    return (
        // <MainContainer>
        //   <Text>React Native Components</Text>
        // </MainContainer>
        <SafeAreaProvider>
            {/*<WelcomePage/>*/}
            <LoginPage/>
        </SafeAreaProvider>
    );
}
