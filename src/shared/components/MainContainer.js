import {StatusBar, StyleSheet, View} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

const MainContainer = ({children, hint}) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={'white'}/>
            <View style={{flex: 1}} accessibilityHint={hint}>
                {children}
            </View>
        </SafeAreaView>
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
