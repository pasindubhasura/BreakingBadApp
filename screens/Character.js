import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

const Character = ({route, navigation}) => {
  const {id} = route.params;
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default Character;
