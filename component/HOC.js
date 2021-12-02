import React, {useState} from 'react';
import {
  Button,
  TouchableOpacity,
  StyleSheet,
  Text,
  Modal,
  View,
} from 'react-native';

export const HOC = Component => {
  return props => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.center}>
            <View style={styles.modalWrapper}>
              <Component {...props} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.closeButton}>x</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Button
          title="title here"
          onPress={() => setModalVisible(!modalVisible)}></Button>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  modalText: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalWrapper: {
    elevation: 5,
    padding: 5,
    flexDirection: 'row',
    borderRadius: 5,
    padding: 35,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    maxWidth: '80%',
  },
  closeButton: {
    marginTop: -20,
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '400',
    color: 'red',
  },
  modalTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
});
