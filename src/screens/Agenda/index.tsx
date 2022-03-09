import React, {useCallback, useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import useActions from '../../hooks/useActions';
import {agendaActions} from '../../redux/agenda/agenda';
import agendaSelectors from '../../redux/agenda/agendaSelector';

const Agenda = () => {
  //Dispatch a new Action
  const [loadAgenda] = useActions([agendaActions.loadAgenda]);

  //With The Selectors, calling the piece of Store that is need it.
  const titleAgenda = useSelector(agendaSelectors.title);
  const typeAgenda = useSelector(agendaSelectors.type);
  const price = useSelector(agendaSelectors.price);
  const key = useSelector(agendaSelectors.key);

  //Every New Page re-Load we are dispatching the loadAgenda Action and getting new values
  const loadAllAgendaData = useCallback(() => {
    loadAgenda();
  }, [loadAgenda]);

  useEffect(() => {
    loadAllAgendaData();
  }, [loadAllAgendaData]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AGENDA ITEMS</Text>
      <Text>title is {titleAgenda}</Text>
      <Text>type is {typeAgenda}</Text>
      <Text>price is {price}</Text>
      <Text>key is {key}</Text>

      <Button
        title="Get new Items from APIS"
        onPress={() => loadAllAgendaData()}
      />
    </View>
  );
};

export default Agenda;
