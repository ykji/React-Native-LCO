import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('rgb(32,0,126)');

  const changeBG = () => {
    let color =
      'rgb(' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ',' +
      Math.floor(Math.random() * 256) +
      ')';
    setRandomColor(color);
  };

  const resetBG = () => {
    setRandomColor('rgb(0,0,0)');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.yk, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBG}>
          <Text style={styles.text}> Tap me </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={resetBG}>
          <Text style={styles.text}> Reset </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  yk: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    backgroundColor: '#BB2CD9',
    paddingHorizontal: 40,
    paddingVertical: 10,
    color: '#FFFFFF',
    borderRadius: 15,
  },
});
