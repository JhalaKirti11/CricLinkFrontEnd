import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice.js";
import SubCategorySlice from "./SubCategorySlice.js";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer: {
        Category: CategorySlice,
        SubCategory: SubCategorySlice,
        User: UserSlice
    }
});

export default store;
