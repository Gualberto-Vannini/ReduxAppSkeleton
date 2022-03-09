import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AgendaScreens {
  INDEX = 'AgendaScreen',
}

export type AgendaStackParamList = {
  [AgendaScreens.INDEX]: undefined;
};

export type AgendaScreenProps<T extends AgendaScreens> = {
  navigation: StackNavigationProp<AgendaStackParamList, T>;
  route: RouteProp<AgendaStackParamList, T>;
};

export default AgendaScreens;
