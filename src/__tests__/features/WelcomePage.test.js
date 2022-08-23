import {screen} from "@testing-library/react-native";
import WelcomePage from "../../features/Welcome/WelcomePage";
import {themeRender} from "../../testHelper/CustomRender";

describe('Welcome Page', () => {
    test('Should render properly', () => {
        themeRender(<WelcomePage/>)
        expect(screen.queryByText('POS System')).toBeTruthy();
        expect(screen.queryByText('Sign In')).toBeTruthy();
    });
})