import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export function ProgressSlider() {
  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <View style={styles.adjustBtn} />
      </View>
    </View>
  );
}

let size = 20;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  slideContainer: {
    height: 4,
    width: '80%',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'teal',
    borderRadius: 50,
    position: 'relative',
  },
  adjustBtn: {
    height: size,
    width: size,
    borderRadius: size / 2,
    position: 'absolute',
    top: 0,
    left: -1,
    backgroundColor: 'teal',
    transform: [{translateY: -size / 2}],
  },
});
