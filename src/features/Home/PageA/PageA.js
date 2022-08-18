import {Pressable, Text} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";
import ModalDialog from "../../../shared/components/ModalDialog";
import AppBackground from "../../../shared/components/AppBackground";

const PageA = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <AppBackground>
            <SafeAreaView>
                <Text>Page A</Text>
                <ModalDialog visible={modalVisible} onVisible={setModalVisible}/>
                <Pressable onPress={() => setModalVisible(true)}>
                    <Text>Show Modal</Text>
                </Pressable>
            </SafeAreaView>
        </AppBackground>
    );
};

export default PageA;