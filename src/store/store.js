import { configureStore } from '@reduxjs/toolkit';

import crudReducer from "./crudSlice";


export default configureStore({
    reducer: {
        crud: crudReducer,
    },

});