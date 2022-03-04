import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AppState {
  isAuth: boolean;
}

const initialState: AppState = {
  isAuth: false,
};

export const appState = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setisAuth(state: AppState, action: PayloadAction<AppState['isAuth']>) {
      state.isAuth = action.payload;
    },
  },
});

export const {setisAuth} = appState.actions;
export default appState.reducer;
