import {getByText, render, screen} from "@testing-library/react";

import NotFound from "./NotFound";

describe("NotFound component", () => {
    it('render ', () => {
        render(<NotFound/>)
        expect(screen.getByText("Not Found")).toBeInTheDocument();
    });
})