import {ImageBackground, StyleSheet} from 'react-native';
import {useTheme} from "../context/ThemeContext";

const AppBackground = ({children, style}) => {
    const theme = useTheme();
    const styles = styling(theme);
    return (
        <ImageBackground source={theme.background} resizeMode="cover"
                         style={[styles.container, style]}>
            {children}
        </ImageBackground>
    );
};

const styling = (theme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.s
    }
});
export default AppBackground;