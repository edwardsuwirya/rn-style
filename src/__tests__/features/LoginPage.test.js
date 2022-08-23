import {screen} from "@testing-library/react-native";
import LoginPage from "../../features/Login/LoginPage";
import {themeRender} from "../../testHelper/CustomRender";

const mockUseLogin = jest.fn();
jest.mock('../../features/Login/UseLoginPage', () => () => mockUseLogin())
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('Login Page', () => {
    test('Should render properly', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: false, data: null, error: null},
            userName: '',
            password: '',
            onChangeUserName: jest.fn(),
            onChangePassword: jest.fn(),
            onAuthenticate: jest.fn()
        })
        themeRender(<LoginPage/>);
        expect(screen.queryByPlaceholderText('Input your email')).toBeTruthy();
        expect(screen.queryByPlaceholderText('Input your password')).toBeTruthy();
        expect(screen.queryByText('Login')).toBeTruthy();
    });
    test('Should show spinner', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: true, data: null, error: null},
            userName: '',
            password: '',
            onChangeUserName: jest.fn(),
            onChangePassword: jest.fn(),
            onAuthenticate: jest.fn()
        })
        themeRender(<LoginPage/>);
        expect(screen.queryByText('Please Wait')).toBeTruthy();
    });
    test('Should show error', () => {
        mockUseLogin.mockReturnValue({
            viewState: {isLoading: false, data: null, error: new Error('error')},
            userName: '',
            password: '',
            onChangeUserName: jest.fn(),
            onChangePassword: jest.fn(),
            onAuthenticate: jest.fn()
        })
        themeRender(<LoginPage/>);
        expect(screen.queryByText('error')).toBeTruthy();
    });
})