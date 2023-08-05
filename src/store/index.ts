import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todosSlice.reducer,
  },
});
