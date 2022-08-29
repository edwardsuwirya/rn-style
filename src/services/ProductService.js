import {SERVICE} from "../shared/constants";
import {LOG} from "../shared/Logging";

export const productService = ({doGet}) => {
    const getAllProduct = async (page) => {
        try {
            const response = await doGet({url: SERVICE.PRODUCT, params: {pageNo: page, itemPerPage: 20}});
            if (response.products.length === 0) {
                throw new Error('No Data')
            } else {
                return response.products
            }
        } catch (e) {
            LOG.error(`Product Service: ${e.message}`)
            throw e;
        }
    }

    return {getAllProduct}
}