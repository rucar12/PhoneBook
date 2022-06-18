import {render, screen} from "@testing-library/react";
import ModalDelete from "./ModalDelete";
import * as reactRedux from "react-redux";
import userEvent from "@testing-library/user-event";

const onClick = jest.fn();

describe("ModalDelete component", ()=>{
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useDispatchMock.mockClear()
    })

    it('Contacts render',  () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        expect(dummyDispatch).not.toHaveBeenCalled()
        render(<ModalDelete handleCancel={onClick}/>);
        expect(screen.getByText("Do you want delete this user?")).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
        userEvent.click(screen.getByRole("button"))
        expect(onClick).toHaveBeenCalled()
    });
    }
)