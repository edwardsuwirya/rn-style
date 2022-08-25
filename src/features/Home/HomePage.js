import {FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MainContainer from "../../shared/components/MainContainer";
import {useTheme} from "../../shared/context/ThemeContext";
import {FontAwesome} from '@expo/vector-icons';
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";

const HomePage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const promoView = () => {
        const promos = [
            {id: 1, promo: 'Discount food'},
            {id: 2, promo: 'Buy 1 Get 1'},
            {id: 3, promo: 'Buy 2 get 1'},
            {id: 4, promo: 'Cashback 50rb'},
            {id: 5, promo: 'Get 100rb, next order'},
            {id: 6, promo: 'Special price for food 1'},
            {id: 7, promo: 'Special price for food 2'},
            {id: 8, promo: 'Special price for food 3'},
            {id: 9, promo: 'Discount 10% min.300rb'},
            {id: 10, promo: 'Discount 20% min.500rb'},
            {id: 11, promo: 'Discount 17% All F&B'},
        ];
        const promoViews = [];
        for (let i = 0; i < Math.ceil(promos.length / 2); i++) {
            let promo1Idx = i * 2;
            let promo2Idx = (i * 2) + 1;
            if (promo2Idx === promos.length) {
                promo2Idx = null
            }
            const p = <View key={i}>
                <TouchableOpacity>
                    <View style={styles.promoContainer}>
                        <View style={{width: '50%'}}><Text
                            style={styles.textPromo}>{promos[promo1Idx].promo}</Text></View>
                        <FontAwesome name="check-circle-o" size={16} color={theme.colors.primary}/>
                    </View>
                </TouchableOpacity>
                {promo2Idx && <TouchableOpacity><View style={styles.promoContainer}>
                    <View style={{width: '50%'}}><Text style={styles.textPromo}>{promos[promo2Idx].promo}</Text></View>
                    <FontAwesome name="check-circle-o" size={16} color={theme.colors.primary}/>
                </View>
                </TouchableOpacity>
                }
            </View>
            promoViews.push(p)
        }
        return promoViews
    }
    const menus = [
        {id: 1, menu: 'Menu 1'},
        {id: 2, menu: 'Menu 2'},
        {id: 3, menu: 'Menu 3'},
        {id: 4, menu: 'Menu 4'},
        {id: 5, menu: 'Menu 5'},
        {id: 6, menu: 'Menu 6'},
        {id: 7, menu: 'Menu 7'},
        {id: 8, menu: 'Menu 8'},
        {id: 9, menu: 'Menu 9'},
        {id: 10, menu: 'Menu 10'},
        {id: 11, menu: 'Menu 11'},
        {id: 12, menu: 'Menu 12'},
    ];
    const MenuView = ({item}) => {
        return (
            <TouchableOpacity key={item.id} style={{alignItems: 'center'}}>
                <View style={styles.circularMenu}>
                    <FontAwesome name="th-list" size={32} color="black"/>
                </View>
                <Text>{item.menu}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <MainContainer>
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
            <ScrollView style={{flex: 1}} horizontal showsHorizontalScrollIndicator={false}>
                {promoView()}
            </ScrollView>
            <View style={{flex:3}}><FlatList data={menus} renderItem={MenuView} numColumns={3} columnWrapperStyle={{justifyContent:'space-around'}}/></View>
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
    textPromo: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 12,
        color: theme.colors.foreground,
        fontFamily: 'Poppins-Regular'
    },
    promoContainer: {
        borderColor: theme.colors.secondary,
        borderWidth: 1,
        margin: theme.spacing.s,
        width: 180,
        height: 60,
        borderRadius: theme.radius.m,
        padding: theme.spacing.s,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    circularMenu: {
        width: 64,
        height: 64,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 32,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    }
})
export default HomePage;