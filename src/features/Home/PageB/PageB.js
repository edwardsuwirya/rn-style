import {Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import AppBackground from "../../../shared/components/AppBackground";

const PageB = () => {
    return (
        <AppBackground>
            <SafeAreaView>
                <Text>Page B</Text>
            </SafeAreaView>
        </AppBackground>
    );
};

export default PageB;