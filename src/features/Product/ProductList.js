import {FlatList, Text, View} from "react-native";
import Item from "./components/ProductItem";
import {useDependency} from "../../shared/hook/UseDependency";
import {useEffect, useState} from "react";
import MainContainer from "../../shared/components/MainContainer";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";

const ProductList = () => {
    const {productService} = useDependency();
    const [products, setProducts] = useState({});
    const [isFetching, setIsFetching] = useState(false);
    useEffect(() => {
        onGetAllProduct();
    }, []);
    const onGetAllProduct = async () => {
        setIsFetching(true);
        try {
            //Simulasi
            setProducts([]);
            const response = await productService.getAllProduct();
            setProducts(response);
            setIsFetching(false);
        } catch (e) {
            console.log('Error');
            setIsFetching(false);
        }
    }

    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <HeaderPageLabel text='Product'/>
            <FlatList
                onRefresh={onGetAllProduct}
                refreshing={isFetching}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </MainContainer>
    );
};
export default ProductList;