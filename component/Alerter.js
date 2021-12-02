import React from 'react';
import {HOC} from './HOC';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
const Alerter = () => {
  return (
    <View>
      <Text style={styles.modalTitle}>I'm Title</Text>
      <Text>Content here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
});

export default HOC(Alerter);
