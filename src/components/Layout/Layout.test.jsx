import {render,screen} from "@testing-library/react";

import Layout from "./Layout";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";


describe("Layout component", () => {
    it('Layout render', () => {
        const history =  createMemoryHistory();
        const {container} = render(
            <Router location={history.location} navigator={history}>
                <Layout/>
            </Router>
        )
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/contacts/i)).toBeInTheDocument();
        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });

})


