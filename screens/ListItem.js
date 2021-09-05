import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {Appbar, Banner} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../redux/action-creators/character-actions';

const ListItem = ({route, navigation}) => {
  const {name, id} = route.params;
  const {character, episode} = useSelector(state => state.characterState);
  console.log(name, id);

  const dispatch = useDispatch();
  const {addOneCharacter, addOneEpisode} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (name === 'Characters') {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`,
      );
      addOneCharacter(response.data[0]);
    } else if (name === 'Episodes') {
      const response = await axios.get(
        `https://www.breakingbadapi.com/api/episodes/${id}`,
      );
      addOneEpisode(response.data[0]);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action
          onPress={() => {
            navigation.popToTop();
          }}
          icon={() => {
            return <FontAwesome name="chevron-left" color="white" size={24} />;
          }}
        />
        {name === 'Characters' ? (
          <Appbar.Content title={character.name} />
        ) : (
          <Appbar.Content title={episode.title} />
        )}
      </Appbar.Header>
      {name === 'Characters' ? (
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
      ) : (
        <View style={styles.card}>
          <View style={styles.detailCard}>
            <View style={styles.row}>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.details}>{episode.title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Air Date</Text>
              <Text style={styles.details}>{episode.air_date}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Season</Text>
              <Text style={styles.details}>{episode.season}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.title}>Episode</Text>
              <Text style={styles.details}>{episode.episode}</Text>
            </View>
          </View>
        </View>
      )}
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
    resizeMode: 'contain',
  },

  imageContainer: {
    width: '100%',
    height: '50%',
    overflow: 'hidden',
  },
  appBar: {
    backgroundColor: '#174b14',
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
    alignContent: 'center',
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
    fontSize: 19,
    marginLeft: 8,
    fontFamily: 'Karla_Regular',
  },
  details: {
    fontSize: 19,
    marginRight: 8,
    fontFamily: 'Karla_Regular',
  },
  spinnerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
    backgroundColor: 'black',
  },
});

export default ListItem;
