import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]); //state for characters data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('characters');
    try {
      const response = await axios.get('https://www.breakingbadapi.com/api/characters');
      setCharacters(response.data);
      console.log('in characters');
    } catch (error) {
      console.log(error);
    }
  }; //sending api request to the endpoint

  return (
    <View>
      {characters.map((i, index) => {
        return <Text key={index}>{i.name}</Text>;
      })}
    </View>
  );
};

export default CharacterList;
