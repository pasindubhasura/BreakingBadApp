import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const back = <FontAwesome5 name="chevron-left" solid />;
const Character = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View>
      <Appbar.Header>
        <Appbar.Action
          onPress={() => {
            navigation.popToTop();
          }}
          icon={<FontAwesome5 name={'chevron-left'} solid color={'white'} />}
        />
      </Appbar.Header>
      <Text>{id}</Text>
      <FontAwesome5 name={'chevron-left'} solid color={'white'} />
    </View>
  );
};

export default Character;
