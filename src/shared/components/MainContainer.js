import {StatusBar, StyleSheet, View} from 'react-native';

const MainContainer = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    }
});
export default MainContainer;
