import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../../app/store';

// Define a type for the slice state
interface DataUser {
  login: string;
  password: string;
}

interface LoginPassword {
  login: string;
  password: string;
}

export const userSlice = createSlice({
  name: 'loginInfo',
  initialState: [] as Array<DataUser>,
  reducers: {
    addInfo: (state, action) => {
      const info: LoginPassword = {
        login: action.payload.login,
        password: action.payload.password,
      };

      return [...state, info];
    },
  },
});

// this is for dispatch
export const { addInfo } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
