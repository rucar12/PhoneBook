import {createSlice, current} from "@reduxjs/toolkit";

import {contacts} from "../constants/contacts";

/*const initialState = {
    users: [...contacts]
}*/

const crudSlice = createSlice({
    name: "crud",
    initialState: [...contacts],
    reducers: {
        createUser(state, action) {
            state.push({
                id: action.payload.id,
                name: action.payload.name,
                phone: action.payload.phone,
                img: action.payload.img,
            })

        },
        updateUser(state, action) {
            return(
                state.map((user) => {
                    return user.id === action.payload.id
                        ? {
                            ...user,
                            name: action.payload.name,
                            phone: action.payload.phone,
                            img: action.payload.img,
                        }
                        : user;
                })
            )
        },
        deleteUser(state, action) {
            return state.filter(user => user.id !== action.payload)
        }
    }
})

export const {createUser, updateUser, deleteUser} = crudSlice.actions;

export default crudSlice.reducer;