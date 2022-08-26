import {FlatList, View} from "react-native";
import Item from "./components/ProductItem";
import {useDependency} from "../../shared/hook/UseDependency";
import {useEffect, useState} from "react";
import MainContainer from "../../shared/components/MainContainer";
import HeaderPageLabel from "../../shared/components/HeaderPageLabel";
import AppBackground from "../../shared/components/AppBackground";
import {useTheme} from "../../shared/context/ThemeContext";

const ProductList = () => {
    const theme = useTheme();
    const {productService} = useDependency();
    const [products, setProducts] = useState({});
    useEffect(() => {
        onGetAllProduct();
    }, []);
    const onGetAllProduct = async () => {
        try {
            const response = await productService.getAllProduct();
            setProducts(response)
        } catch (e) {
            console.log('Error')
        }
    }

    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <AppBackground>
                <View style={{margin: theme.spacing.s}}>
                    <HeaderPageLabel text='Product'/>
                    <FlatList
                        data={products}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </AppBackground>
        </MainContainer>
    );
};
export default ProductList;