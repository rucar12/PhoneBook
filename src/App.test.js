import { render,screen } from '@testing-library/react';
import App from './App';
import {useAppSelector} from "./store/redux-hooks";
import {testAppSelector} from "./store/test-app-selector";
import {createMemoryHistory} from "history"
import {Router} from "react-router-dom";

jest.mock("./store/redux-hooks")

describe('App component', () => {

    beforeEach(()=>{
        useAppSelector.mockImplementation(testAppSelector)
    })

    test('full app rendering/navigating', () => {
        const history =  createMemoryHistory();
        const route = '/some-route'
        history.push(route)
        const {container} = render(
            <Router location={history.location} navigator={history} >
                <App />
            </Router>)

        expect(screen.getByTestId('location-display')).toHaveTextContent(route)
    })
});
