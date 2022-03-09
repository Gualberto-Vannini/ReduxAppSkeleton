import {RootState} from '../rootReducer';

const title = (state: RootState) => state?.agenda.activity;
const type = (state: RootState) => state?.agenda.type;
const price = (state: RootState) => state?.agenda.price;
const key = (state: RootState) => state?.agenda.key;

const agendaSelectors = {
  title,
  type,
  price,
  key,
};

export default agendaSelectors;
