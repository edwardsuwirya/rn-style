import {themeRender} from "../../testHelper/CustomRender";
import LoginPage from "../../features/Login/LoginPage";
import {fireEvent, waitFor, screen} from "@testing-library/react-native";
import {ROUTE} from "../../shared/constants";

const mockOnLogin = jest.fn();
const mockReplaceNavigate = jest.fn();
jest.mock("../../shared/hook/UseAuth", () => ({
    useAuth: () => mockOnLogin()
}));
jest.mock("@react-navigation/native", () => ({
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
        replace: mockReplaceNavigate
    }),
}));
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('Login Page', () => {
    test('Should show error when user name or password empty', async () => {
        mockOnLogin.mockReturnValue({
            onLogin: jest.fn()
        })
        themeRender(<LoginPage/>);
        const loginButtonElem = screen.getByText('Login');
        fireEvent.press(loginButtonElem);
        await waitFor(() => {
            const errorLabelElem = screen.getByText(/Please input/);
            expect(errorLabelElem).toBeTruthy();
        })
    });
    test('Should show error when unauthorized', async () => {
        mockOnLogin.mockReturnValue({
            onLogin: jest.fn().mockResolvedValue(false)
        })
        themeRender(<LoginPage/>);
        const userNameElem = screen.getByPlaceholderText(/email/);
        const passwordElem = screen.getByPlaceholderText(/password/);
        fireEvent.changeText(userNameElem, {target: {value: 'dummyUser'}});
        fireEvent.changeText(passwordElem, {target: {value: 'dummyPassword'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.press(loginButtonElem);
        await waitFor(() => {
            const errorLabelElem = screen.getByText(/Unauthorized/);
            expect(errorLabelElem).toBeTruthy();
        })
    })
    test('Should show error when unauthorized', async () => {
        mockOnLogin.mockReturnValue({
            onLogin: jest.fn().mockRejectedValue(new Error('Error'))
        })
        themeRender(<LoginPage/>);
        const userNameElem = screen.getByPlaceholderText(/email/);
        const passwordElem = screen.getByPlaceholderText(/password/);
        fireEvent.changeText(userNameElem, {target: {value: 'dummyUser'}});
        fireEvent.changeText(passwordElem, {target: {value: 'dummyPassword'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.press(loginButtonElem);
        await waitFor(() => {
            const errorLabelElem = screen.getByText(/Error/);
            expect(errorLabelElem).toBeTruthy();
        })
    })
    test('Success login', async () => {
        mockOnLogin.mockReturnValue({
            onLogin: jest.fn().mockResolvedValue(true)
        })
        themeRender(<LoginPage/>);
        const userNameElem = screen.getByPlaceholderText(/email/);
        const passwordElem = screen.getByPlaceholderText(/password/);
        fireEvent.changeText(userNameElem, {target: {value: 'dummyUser'}});
        fireEvent.changeText(passwordElem, {target: {value: 'dummyPassword'}});
        const loginButtonElem = screen.getByText('Login');
        fireEvent.press(loginButtonElem);
        await waitFor(() => {
            expect(mockReplaceNavigate).toHaveBeenCalledWith(ROUTE.HOME)
        })
    })
})