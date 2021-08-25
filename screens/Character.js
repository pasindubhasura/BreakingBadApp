import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';

const Character = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction />
      </Appbar.Header>
      <Text>{id}</Text>
    </View>
  );
};

export default Character;
