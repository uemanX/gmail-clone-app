import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit';
// import userReducer, { UserState } from './features/user/userSlice';

// export type AppState = {
//   user: UserState;
// };

// const rootReducer = combineReducers<AppState>({
//   user: userReducer,
// });

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremnt: (state) => {
      state.value + 1;
    },
  },
});

const rootReducer = combineReducers({
  user: counterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

export default store;
