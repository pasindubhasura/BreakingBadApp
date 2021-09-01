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

const Stack = createNativeStackNavigator();

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
            <Stack.Navigator initialRouteName="CharacterList">
              <Stack.Screen
                name="CharacterList"
                component={CharacterList}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="Character"
                component={Character}
                options={{headerShown: false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};
