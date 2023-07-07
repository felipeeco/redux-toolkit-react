import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../interfaces/userInterface";

const initialState: UserInterface = {
  name: null,
  username: null,
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserInterface>) => {
      const { name, username, email } = action.payload;
      state.name = name;
      state.username = username;
      state.email = email;
    },
    changeEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
  },
});

export const { addUser, changeEmail } = userSlice.actions;
export default userSlice.reducer;
