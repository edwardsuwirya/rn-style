import {ImageBackground, StatusBar, StyleSheet} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const AppBackground = ({children, style}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <ImageBackground source={theme.background}
                         style={[styles.container, style]}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'}/>
            {children}
        </ImageBackground>
    );
};

const styling = (theme) => StyleSheet.create({
    container: {
        flex: 1,
    }
});
export default AppBackground;