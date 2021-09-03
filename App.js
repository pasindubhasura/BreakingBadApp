import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import GlobalFont from 'react-native-global-font';
import {StatusBar} from 'react-native';
import CharacterList from './screens/CharacterList';
import Character from './screens/Character';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tabs from './Tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default App = () => {
  //add a custom font
  let fontName = 'Karla_Regular';
  GlobalFont.applyGlobal(fontName);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <StatusBar backgroundColor="#054001" />
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
