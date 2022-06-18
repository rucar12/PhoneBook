import {render,screen} from "@testing-library/react";

import ModalUpdate from "./ModalUpdate";
import userEvent from "@testing-library/user-event";

const Data =  {
  phone:"1234"
}

const onChange = jest.fn();
const onClick = jest.fn();

describe("ModalUpdate component", () => {
    it('ModalUpdate render', () => {
        render(<ModalUpdate/>)

        expect(screen.getAllByText(/change/i));
    });
    it('Value ', () => {
        render(<ModalUpdate editFormData={Data}/>)

        expect(screen.getByTestId("phone")).toBeInTheDocument();
        expect(screen.getByTestId("phone")).not.toBeNull();
    });

    it('onChange works',  ()  => {
        render(<ModalUpdate handleEditFormChange={onChange}/>)

        userEvent.type(screen.getByTestId("textbox"), "Vasya");
        expect(onChange).toHaveBeenCalledTimes(5)
    });
    it('onClick works',  ()  => {
        render(<ModalUpdate handleCancel={onClick}/>)

        userEvent.click(screen.getByTestId("cancel"));
        expect(onClick).toHaveBeenCalled()
    });
})

