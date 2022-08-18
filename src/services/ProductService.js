import {sleep} from "../shared/sleep";
import {DATA} from "../data/products";

export const productService = () => {
    const getAllProduct = async () => {
        try {
            return await sleep((resolve, reject) => {
                resolve(DATA);
            }, 1000);
        } catch (e) {
            throw e;
        }
    }

    return {getAllProduct}
}