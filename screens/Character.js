import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar} from 'react-native-paper';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FitImage from 'react-native-fit-image';

const Character = ({route, navigation}) => {
  const {id} = route.params;
  const [character, setCharacter] = useState({});

  const back = <FontAwesome name="chevron-left" color="red" size={40} />;

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
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action
          onPress={() => {
            navigation.popToTop();
          }}
          icon={() => {
            return <FontAwesome name="chevron-left" color="white" size={24} />;
          }}
        />
        <Appbar.Content title={character.name} />
      </Appbar.Header>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <FitImage source={{uri: character.img}} style={styles.img} />
        </View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  img: {
    width: 400,
    height: 450,
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  imageContainer: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
  },
  appBar: {
    backgroundColor: '#121212',
  },
});

export default Character;
