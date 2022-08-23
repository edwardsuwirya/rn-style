import {FlatList} from "react-native";
import Item from "./components/ProductItem";
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel";
import useProductList from "./UseProductList";
import AppBackground from "../../../shared/components/AppBackground";
import {SafeAreaView} from "react-native-safe-area-context";

const ProductList = () => {
    const {viewState, onRefresh, onFetchMore} = useProductList();
    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <AppBackground>
            <SafeAreaView>
                <HeaderPageLabel text='Product'/>
                <FlatList
                    onRefresh={onRefresh}
                    onEndReached={onFetchMore}
                    refreshing={viewState.isLoading}
                    data={viewState.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </AppBackground>
    );
};
export default ProductList;