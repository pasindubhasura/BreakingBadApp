import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appbar, Banner} from 'react-native-paper';

const Home = () => {
  return (
    <View>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Breaking Bad Characters" />
      </Appbar.Header>
    </View>
  );
};
const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#174b14',
  },
});

export default Home;
