import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/Todo/todoSlice'

export const store = configureStore({
    reducer : todoReducer
}) //Most of the times takes an object