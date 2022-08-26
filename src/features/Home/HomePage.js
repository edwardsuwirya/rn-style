import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import {useTheme} from "../../shared/context/ThemeContext";
import {FontAwesome} from '@expo/vector-icons';
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import AppBackground from "../../shared/components/AppBackground";
import MenuView from "./components/MenuView";
import PromoView from "./components/PromoView";

const HomePage = () => {
    const theme = useTheme();
    const styles = styling(theme);

    return (
        <MainContainer>
            <AppBackground>
                <View style={{flex: 1, margin: theme.spacing.s}}>
                    <HeaderPageLabel text='POS'/>
                    <View style={styles.container}>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
                                <FontAwesome name="sticky-note-o" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Add{'\n'}Order</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
                                <FontAwesome name="user-plus" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Customer{'\n'}Registration</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={{alignItems: "center",}}>
                                <FontAwesome name="money" size={24} color={theme.colors.primary}/>
                                <Text style={styles.textMenu}>Bill{'\n'}Payment</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <HeaderPageLabel text='Promo'/>
                    <View style={{flex: 1}}>
                        <PromoView/>
                    </View>
                    <View style={{flex: 3}}>
                        <MenuView/>
                    </View>
                </View>
            </AppBackground>
        </MainContainer>
    )
}
const styling = (theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        borderRadius: theme.radius.m,
    },
    menuContainer: {
        flex: 1,
        height: 64,
        justifyContent: 'center'
    },
    textMenu: {
        textAlign: 'center',
        fontSize: 12,
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },

})
export default HomePage;