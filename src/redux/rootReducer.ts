import {combineReducers} from '@reduxjs/toolkit';

import agenda from './agenda/agenda';

const rootReducer = combineReducers({
  agenda,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
