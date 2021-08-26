import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const back = <FontAwesome5 name="chevron-left" solid />;
const Character = ({route, navigation}) => {
  const {id} = route.params;
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`,
      );
      setCharacter(response.data[0]);
      console.log(character);
    } catch (error) {
      console.log(error);
    }
  }; //sending api request to the endpoint

  return (
    <View>
      <Appbar.Header>
        <Appbar.Content title={character.name} />
        <Appbar.Action
          onPress={() => {
            navigation.popToTop();
          }}
          icon={<FontAwesome5 name={'chevron-left'} solid color={'white'} />}
        />
      </Appbar.Header>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: character.img}} style={styles.img} />
          <View
            style={{
              position: 'absolute',
              left: 8,
              bottom: 5,
            }}>
            <Text style={styles.nameText}>{character.name}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    color: 'white',
    fontSize: 25,
  },
  imageContainer: {
    width: '100%',
    height: '45%',
  },
});

export default Character;
