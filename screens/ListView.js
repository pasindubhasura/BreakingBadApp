import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Title, Appbar, Banner} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListView = props => {
  const [items, setItems] = useState(props.items);
  const [itemNames, setItemNames] = useState(props.itemNames);
  const {characters, episodes} = useSelector(state => state.characterState);
  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title={props.name} />
      </Appbar.Header>
      <ScrollView style={styles.scrollView}>
        {items.map((i, index) => {
          return (
            <Card
              key={index}
              elevation={1}
              mode="elevated"
              style={styles.card}
              onPress={() =>
                props.navigation.navigate('ListItem', {
                  id: i[itemNames[0]],
                  name: props.name,
                })
              }>
              <Card.Content>
                {props.name === 'Characters' ? (
                  <Card.Cover source={{uri: i[itemNames[2]]}} />
                ) : null}
                <Title style={styles.whiteColor}>{i[itemNames[1]]}</Title>
              </Card.Content>
            </Card>
          );
        })}
      </ScrollView>
    </View>
  );
};

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
    backgroundColor: '#174b14',
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
    opacity: 0.7,
    backgroundColor: 'black',
  },
});

export default ListView;
