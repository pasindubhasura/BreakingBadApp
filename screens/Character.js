import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Appbar} from 'react-native-paper';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
          <Image source={{uri: character.img}} style={styles.img} />
        </View>
        <View style={styles.detailCard}>
          <View style={styles.row}>
            <Text style={styles.title}>Nick Name</Text>
            <Text style={styles.details}>{character.nickname}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Birthday</Text>
            <Text style={styles.details}>{character.birthday}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Status</Text>
            <Text style={styles.details}>{character.status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.title}>Portrayed by</Text>
            <Text style={styles.details}>{character.portrayed}</Text>
          </View>
        </View>
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
    width: '100%',
    height: '100%',
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
  detailCard: {
    marginTop: 12,
    marginLeft: 12,
    marginRight: 12,
    height: '30%',
    borderRadius: 8,
    borderStyle: 'solid',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    marginTop: 5,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 8,
    fontFamily: 'Karla_Regular',
  },
  details: {
    fontSize: 18,
    marginRight: 8,
    fontFamily: 'Karla_Regular',
  },
});

export default Character;
