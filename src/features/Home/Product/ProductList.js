import {FlatList} from "react-native";
import Item from "./components/ProductItem";
import MainContainer from "../../../shared/components/MainContainer";
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel";
import useProductList from "./UseProductList";

const ProductList = () => {
    const {viewState, onRefresh, onFetchMore} = useProductList();
    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <HeaderPageLabel text='Product'/>
            <FlatList
                onRefresh={onRefresh}
                onEndReached={onFetchMore}
                refreshing={viewState.isLoading}
                data={viewState.data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </MainContainer>
    );
};
export default ProductList;