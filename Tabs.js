import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CharacterList from './screens/CharacterList';
import Character from './screens/Character';
import Home from './screens/Home';
import ListView from './screens/ListView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

export default Tabs = () => {
  const {characters} = useSelector(state => state.characterState);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Characters"
        children={() => <ListView name="Characters" />}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="child" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Episodes"
        children={() => (
          <ListView name="Episodes" items={characters} itemNames={[]} />
        )}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="tv" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
