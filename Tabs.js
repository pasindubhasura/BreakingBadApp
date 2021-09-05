import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListView from './screens/ListView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';

const Tab = createBottomTabNavigator();

const Tabs = props => {
  const {characters, episodes} = useSelector(state => state.characterState);
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#174b14',
        },
        tabBarInactiveTintColor: 'white',
        tabBarActiveTintColor: '#45ff3b',
      }}>
      <Tab.Screen
        name="Characters"
        children={() => (
          <ListView
            name="Characters"
            items={characters}
            itemNames={['char_id', 'name', 'img']}
            navigation={props.navigation}
          />
        )}
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
          <ListView
            name="Episodes"
            items={episodes}
            itemNames={['episode_id', 'title', 'img']}
            navigation={props.navigation}
          />
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

export default Tabs;
