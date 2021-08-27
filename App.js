import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import GlobalFont from 'react-native-global-font';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CharacterList from './screens/CharacterList';
import Character from './screens/Character';

const Stack = createNativeStackNavigator();

export default App = () => {
  let fontName = 'Karla_Regular';
  GlobalFont.applyGlobal(fontName);
  return (
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
  );
};
