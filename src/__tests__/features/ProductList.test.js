import {themeRender} from "../../testHelper/CustomRender";
import {screen} from "@testing-library/react-native";
import ProductList from "../../features/Home/Product/ProductList";

const mockUseProductList = jest.fn();
jest.mock('../../features/Home/Product/UseProductList', () => () => mockUseProductList())
describe('Product List', () => {
    test('Should render some data when first load', () => {
        mockUseProductList.mockReturnValue({
            viewState: {
                isLoading: false, data: [
                    {
                        id: '999',
                        productName: 'mie instan'
                    },
                    {
                        id: '101',
                        productName: 'telor'
                    },
                    {
                        id: '102',
                        productName: 'Keju'
                    },], error: null
            },
            onRefresh: jest.fn(),
            onFetchMore: jest.fn()
        })
        themeRender(<ProductList/>);
        expect(screen.getAllByA11yHint('product-items').length).toBe(3);
    })
})