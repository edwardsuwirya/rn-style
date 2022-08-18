import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import {NavigationContainer} from "@react-navigation/native";
import AppRouter from "./src/navigation/AppRouter";


export default function App() {
    const fonts = useAppFont();

    if (!fonts) {
        return null;
    }
    return (
        <ThemeProvider>
            <NavigationContainer>
                <AppRouter/>
            </NavigationContainer>
        </ThemeProvider>
    );
}
