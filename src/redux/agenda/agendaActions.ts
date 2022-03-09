import {createAsyncThunk} from '@reduxjs/toolkit';
import AgendaApi from '../../api/AgendaApi/Agenda';

export const loadAgenda = createAsyncThunk('agenda/getItems', async () => {
  const response = await AgendaApi.getActivity();
  return response.data;
});

const asyncAgendaActions = {
  loadAgenda,
};

export default asyncAgendaActions;
