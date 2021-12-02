/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {View} from 'react-native';
import Alerter from './component/Alerter';
import TextModal from './component/TextModal';

const App = () => {
  return (
    <View>
      <TextModal
        title={'Hello'}
        content={'Hey guys how are yeah. Click the top right button to exit'}
        buttonTitle={'Sample'}
      />
      <Alerter />
    </View>
  );
};

export default App;
