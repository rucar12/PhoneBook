import {render, screen} from "@testing-library/react";
import ModalCreate from "./ModalCreate";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();
const onChange = jest.fn();

describe("ModalCreate component", () => {
    it('ModalCreate render',  () => {
        render(<ModalCreate/>)
        expect(screen.getByText("Create contact")).toBeInTheDocument();
    });
    it('onChange working',  () => {
        render(<ModalCreate handleAddFormChange={onChange}/>)

        userEvent.type(screen.getByTestId("name"), "Fredyrik")
        expect(onChange).toHaveBeenCalledTimes(8);
    });
    it('onClick working',  () => {
        render(<ModalCreate handleAddFormSubmit={onClick}/>)

        userEvent.click(screen.getByTestId("submit"))
        expect(onClick).toHaveBeenCalled()
    });
})