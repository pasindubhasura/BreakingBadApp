import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharacterList from './screens/CharacterList';
import Character from './screens/Character';

const Tab = createBottomTabNavigator();

export default Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="CharacterList"
        component={CharacterList}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen
                name="Character"
                component={Character}
                options={{headerShown: false}}
              /> */}
    </Tab.Navigator>
  );
};
