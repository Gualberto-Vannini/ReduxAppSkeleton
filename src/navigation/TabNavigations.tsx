import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import AgendaStack from './Agenda/AgendaStack';
import ProfileStack from './Profile/ProfileStack';

import ProfileIcon from './Profile/profile.svg';
import AgendaIcon from './Agenda/agenda.svg';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute'},
        tabBarActiveTintColor: '#fc1515',
        tabBarInactiveTintColor: '#0b86f8',
      }}>
      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
        }}
      />
      <Tab.Screen
        name={'Agenda'}
        component={AgendaStack}
        options={{
          tabBarIcon: ({color}) => <AgendaIcon fill={color} />,
        }}
      />
    </Tab.Navigator>
  );
};
