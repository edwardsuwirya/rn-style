import {Button, FlatList, Text, View} from "react-native";
import Item from "./components/ProductItem";
import {useDependency} from "../../shared/hook/UseDependency";
import {useEffect, useState} from "react";
import MainContainer from "../../shared/components/MainContainer";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";

const ProductList = () => {
    const {productService} = useDependency();
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1)
    useEffect(() => {
        onGetAllProduct(page);
    }, [page]);
    const onGetAllProduct = async () => {
        setIsFetching(true);
        try {
            const response = await productService.getAllProduct(page);
            setProducts(prevState => [
                    ...prevState,
                    ...response
                ]
            );
            setIsFetching(false);
        } catch (e) {
            console.log(e);
            setIsFetching(false);
        }
    }
    const onFetchMore = async () => {
        setPage(prevState => prevState + 1);
    }

    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <HeaderPageLabel text='Product'/>
            <FlatList
                onRefresh={onGetAllProduct}
                onEndReached={onFetchMore}
                refreshing={isFetching}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </MainContainer>
    );
};
export default ProductList;