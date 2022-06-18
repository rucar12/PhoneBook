import {getByTestId, render, screen} from "@testing-library/react";

import Contact from "./Contact";
import userEvent from "@testing-library/user-event";

const Data = {
    name:"name",
    phone:"123"
}

const onClick2 = jest.fn();
const onClick = jest.fn();

describe("Contact component", () => {
    it("Contact render", ()=>{
        render(<Contact name={Data.name} phone={Data.phone} />)
        expect(screen.getByText(/name/i)).toBeInTheDocument();
        expect(screen.getByText(/123/)).toBeInTheDocument();
    })
    it("onChange working", ()=>{
        render(<Contact handleEditClick={onClick} />)
        userEvent.click(screen.getByTestId("edit"))
        expect(onClick).toHaveBeenCalled()
    })
    it("onClick working", ()=>{
        render(<Contact  handleDeleteClick={onClick2}/>)
        userEvent.click(screen.getByTestId("delete"))
        expect(onClick2).toHaveBeenCalled();
    })
})