import {agendaApiAxios} from '../../api/Apis';
import {ROUTE_AGENDA_ACTIVITY} from './routes';

class AgendaApi {
  getActivity() {
    return agendaApiAxios.get(ROUTE_AGENDA_ACTIVITY);
  }
}
export default new AgendaApi();
