import {FlatList} from "react-native";
import Item from "./components/ProductItem";
import {useDependency} from "../../../shared/hook/UseDependency";
import {useEffect, useState} from "react";
import MainContainer from "../../../shared/components/MainContainer";
import HeaderPageLabel from "../../../shared/components/HeaderPageLabel";

const ProductList = () => {
    const {productService} = useDependency();
    const [products, setProducts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [isNext, setIsNext] = useState(true)
    useEffect(() => {
        onGetAllProduct();
    }, [page]);
    const onGetAllProduct = async () => {
        setIsFetching(true);
        try {
            const response = await productService.getAllProduct(page);
            if (page === 1) {
                setProducts([
                        ...response
                    ]
                );
            } else {
                setProducts(prevState => [
                        ...prevState,
                        ...response
                    ]
                );
            }
            setIsFetching(false);
            setIsNext(true)
        } catch (e) {
            console.log(e);
            setIsNext(false)
            setIsFetching(false);
        }
    }
    const onFetchMore = async () => {
        if (isNext) {
            setPage(prevState => prevState + 1);
        } else {
            onGetAllProduct()
        }
    }

    const onRefresh = async () => {
        setPage(1);
    }

    const renderItem = ({item}) => {
        return <Item productName={item.productName}/>
    }
    return (
        <MainContainer>
            <HeaderPageLabel text='Product'/>
            <FlatList
                onRefresh={onRefresh}
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