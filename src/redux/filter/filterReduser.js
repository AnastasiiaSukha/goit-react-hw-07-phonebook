
import { createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./filterAction";

export const filterReducer = createReducer("", {
    [setFilter.type]: (_, {payload}) => payload
})