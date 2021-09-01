import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {Card, Title, Appbar, Banner} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../redux/action-creators/character-actions';
import NetInfo from '@react-native-community/netinfo';

const CharacterList = ({navigation}) => {
  //state for characters data
  const [isLoading, setIsLoading] = useState(false);
  const {characters} = useSelector(state => state.characterState);

  const dispatch = useDispatch();
  const {addCharacters} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    NetInfo.addEventListener(async state => {
      if (state.isConnected && state.isInternetReachable) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            'https://www.breakingbadapi.com/api/characters',
          );
          addCharacters(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    });
  }; //sending api request to the endpoint

  return (
    <View style={{flex: 1}}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Breaking Bad Characters" />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        {characters.map((i, index) => {
          return (
            <Card
              key={index}
              elevation={1}
              mode="elevated"
              style={styles.card}
              onPress={() => navigation.navigate('Character', {id: i.char_id})}>
              <Card.Content>
                <Card.Cover source={{uri: i.img}} />
                <Title style={styles.whiteColor}>{i.name}</Title>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
      {isLoading && (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color="#121212"
            style={styles.spinner}
          />
        </View>
      )}
    </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  card: {
    margin: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  appBar: {
    backgroundColor: '#121212',
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  whiteColor: {
    color: 'black',
  },
  spinnerContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.3,
    backgroundColor: 'black',
  },
});
