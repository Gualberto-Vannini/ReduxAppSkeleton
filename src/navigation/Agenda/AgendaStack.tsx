import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Agenda from '../../screens/Agenda/index';
import AgendaScreens, {AgendaStackParamList} from './Agenda';

const Stack = createStackNavigator<AgendaStackParamList>();

const options = {
  animationEnabled: true,
  headerShown: false,
};

function AgendaStack() {
  return (
    <Stack.Navigator initialRouteName={AgendaScreens.INDEX}>
      <Stack.Screen
        name={AgendaScreens.INDEX}
        component={Agenda}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default AgendaStack;
