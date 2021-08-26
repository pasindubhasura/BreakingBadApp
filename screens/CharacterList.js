import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  useWindowDimensions,
} from 'react-native';
import axios from 'axios';
import {Card, Paragraph, Title, Appbar} from 'react-native-paper';

const CharacterList = ({navigation}) => {
  const [characters, setCharacters] = useState([]); //state for characters data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('characters');
    try {
      const response = await axios.get(
        'https://www.breakingbadapi.com/api/characters',
      );
      setCharacters(response.data);
      console.log('in characters');
    } catch (error) {
      console.log(error);
    }
  }; //sending api request to the endpoint

  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Breaking Bad Characters" />
      </Appbar.Header>
      <ScrollView style={styles.scrollview}>
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
    </View>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  card: {
    margin: 12,
  },
  appBar: {
    backgroundColor: '#121212',
  },
  scrollview: {
    backgroundColor: '#fff',
  },
  whiteColor: {
    color: 'black',
  },
});
