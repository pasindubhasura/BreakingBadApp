import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {Appbar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const back = <FontAwesome5 name="chevron-left" solid />;
const Character = ({route, navigation}) => {
  const {id} = route.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchData();
  }, id);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`,
      );
      setCharacter(response.data[0]);
      console.log('in characters');
    } catch (error) {
      console.log(error);
    }
  }; //sending api request to the endpoint

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
      <Text>{character.name}</Text>
      <FontAwesome5 name={'chevron-left'} solid color={'white'} />
    </View>
  );
};

export default Character;
