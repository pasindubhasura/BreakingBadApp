import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import GlobalFont from 'react-native-global-font';
import {StatusBar} from 'react-native';
import CharacterList from './screens/CharacterList';
import Character from './screens/Character';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const Stack = createNativeStackNavigator();

export default App = () => {
  //add a custom font
  let fontName = 'Karla_Regular';
  GlobalFont.applyGlobal(fontName);

  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar backgroundColor="#424242" />
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
    </Provider>
  );
};
