import {themeRender} from "../../testHelper/CustomRender";
import AppRouter from "../../navigation/AppRouter";
import {fireEvent, screen, waitFor} from "@testing-library/react-native";
import {ROUTE} from "../../shared/constants";

const mockTokenExist = jest.fn();
jest.mock('../../shared/hook/UseAuth', () => {
    return {
        useAuth: () => ({
            isTokenExist: mockTokenExist
        })
    }
});
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
describe('App Router', () => {
    test('Should navigate to home when token is exist', () => {
        mockTokenExist.mockResolvedValue(true)
        themeRender(<AppRouter/>);
        expect(waitFor(() => screen.getByA11yHint('Page_A'))).toBeTruthy()
    })
    test('Should navigate to login when token is not exist', () => {
        mockTokenExist.mockResolvedValue(false)
        themeRender(<AppRouter/>);
        expect(waitFor(() => screen.getByA11yHint('Page_Welcome'))).toBeTruthy()
    })
    test('Should navigate to login when logout', () => {
        themeRender(<AppRouter initRoute={ROUTE.HOME}/>);
        // screen.findByText('Logout').then((logoutButton) => {
        //     fireEvent.press(logoutButton);
        // })
        const logoutButton = screen.getByText(/Logout/);
        fireEvent.press(logoutButton);
        expect(waitFor(() => screen.getByA11yHint('Page_Login'))).toBeTruthy()
    })
})