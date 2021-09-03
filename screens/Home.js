import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tabs from '../Tabs';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../redux/action-creators/character-actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {addEpisodes, addCharacters} = bindActionCreators(
    actionCreators,
    dispatch,
  );

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const episodes = await axios.get(
        'https://www.breakingbadapi.com/api/episodes',
      );
      const characters = await axios.get(
        'https://www.breakingbadapi.com/api/characters',
      );
      addEpisodes(episodes.data);
      addCharacters(characters.data);
    } catch (error) {
      console.log(error);
    }
  }; //sending api request to the endpoint

  return <Tabs navigation={navigation} />;
};
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#174b14',
  },
});

export default Home;
