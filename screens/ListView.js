import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Banner} from 'react-native-paper';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListView = props => {
  const {items} = props;
  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title={props.name} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#174b14',
  },
});

export default ListView;
