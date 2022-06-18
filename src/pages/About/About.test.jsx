import {render, screen} from "@testing-library/react";

import About from "./About";

describe("About component", () => {
    it('render About ', () => {
        render(<About/>)
        expect(screen.getByText(/about/i)).toBeInTheDocument();
    });
})