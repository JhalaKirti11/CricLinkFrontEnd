import { configureStore } from "@reduxjs/toolkit";
import CategorySlice from "./CategorySlice.js";
import SubCategorySlice from "./SubCategorySlice.js";
import UserSlice from "./UserSlice";
import TeamSlice from "./TeamSlice";
import TournamentSlice from "./TournamentSlice";
import PlayerSlice from "./PlayerSlice";
import NotificationSlice from "./NotificationSlice";

const store = configureStore({
    reducer: {
        Category: CategorySlice,
        SubCategory: SubCategorySlice,
        User: UserSlice,
        Teams: TeamSlice,
        Tournaments: TournamentSlice,
        Players: PlayerSlice,
        Notifications: NotificationSlice
    }
});

export default store;
