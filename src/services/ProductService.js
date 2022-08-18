import {sleep} from "../shared/sleep";
import {DATA} from "../data/products";

export const productService = () => {
    const getAllProduct = async (page) => {
        const pagePerRow = 20;
        const startIndex = (page - 1) * pagePerRow;
        const endIndex = page * pagePerRow;
        try {
            return await sleep((resolve, reject) => {
                resolve(DATA.slice(startIndex, endIndex));
            }, 1000);
        } catch (e) {
            throw e;
        }
    }

    return {getAllProduct}
}