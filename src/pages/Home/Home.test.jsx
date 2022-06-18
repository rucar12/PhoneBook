import {render, screen} from "@testing-library/react";

import Home from "./Home";

describe("Home component", () => {
    it('render Home ', () => {
        render(<Home/>)
        expect(screen.getByText(/home/i)).toBeInTheDocument();
    });
})