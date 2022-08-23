import {useDependency} from "../../../shared/hook/UseDependency";
import useViewState from "../../../shared/hook/UseViewState";
import {useEffect, useRef, useState} from "react";

const useProductList = () => {
    const {productService} = useDependency();
    const {viewState, setLoading, setData, setError} = useViewState();
    const [page, setPage] = useState(1);
    const isNext = useRef(false)
    const products = useRef([]);
    useEffect(() => {
        onGetAllProduct();
    }, [page]);

    const onGetAllProduct = async () => {
        setLoading(true, false);
        try {
            const response = await productService.getAllProduct(page);
            products.current = [...products.current, ...response];
            isNext.current = true;
            setData(products.current);
        } catch (e) {
            isNext.current = false;
            setError(e, false);
        }
    }

    const onFetchMore = async () => {
        if (isNext.current) {
            setPage(prevState => prevState + 1);
        } else {
            await onGetAllProduct()
        }
    }

    const onRefresh = async () => {
        products.current = [];
        if (page !== 1) {
            setPage(1);
        } else {
            await onGetAllProduct()
        }
    }
    return {
        products, viewState, onRefresh, onFetchMore
    }
}

export default useProductList;