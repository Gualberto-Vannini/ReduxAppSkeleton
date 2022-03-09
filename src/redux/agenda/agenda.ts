import {createSlice} from '@reduxjs/toolkit';

import asyncAgendaActions from './agendaActions';

type AgendaState = {
  activity?: string;
  accessibility?: number;
  type?: string;
  participants?: number;
  price?: number;
  link?: string;
  key?: string;
};

let initialState: AgendaState = {
  activity: undefined,
  accessibility: undefined,
  type: undefined,
  participants: undefined,
  price: undefined,
  link: undefined,
  key: undefined,
};

// A function that accepts an initial state, an object of reducer functions, and a "slice name",
// and automatically generates action creators and action types that correspond to the reducers and state.
// This APIs are the standard approach for writing Redux logic.

const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      asyncAgendaActions.loadAgenda.fulfilled,
      (state, action) => {
        state = action.payload;
        return state;
      },
    );
  },
});

export const agendaActions = {
  ...agendaSlice.actions,
  ...asyncAgendaActions,
};

export default agendaSlice.reducer;
