import {FlatList} from "react-native";
import Item from "./components/ProductItem";
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel";
import useProductList from "./UseProductList";
import AppBackground from "../../../shared/components/AppBackground";
import MainContainer from "../../../shared/components/MainContainer";
import {useTheme} from "../../../shared/context/ThemeContext";

const ProductList = () => {
    const theme = useTheme();
    const {viewState, onRefresh, onFetchMore} = useProductList();
    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel text='Product'/>
                <FlatList
                    onRefresh={onRefresh}
                    onEndReached={onFetchMore}
                    refreshing={viewState.isLoading}
                    data={viewState.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={{paddingBottom: theme.spacing.s}}
                />
            </AppBackground>
        </MainContainer>
    );
};
export default ProductList;