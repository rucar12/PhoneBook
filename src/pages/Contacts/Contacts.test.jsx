import {render, screen} from "@testing-library/react";

import Contacts from "./Contacts";

import * as reactRedux from 'react-redux'

describe("Contacts component", () => {

    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

    beforeEach(() => {
        useDispatchMock.mockClear()
    })

    it('Contacts render',  () => {
        const dummyDispatch = jest.fn()
        useDispatchMock.mockReturnValue(dummyDispatch)
        expect(dummyDispatch).not.toHaveBeenCalled()
        render(<Contacts/>);

    });
})