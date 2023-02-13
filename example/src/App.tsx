import * as React from 'react';

import { StyleSheet, View, Text, Pressable } from 'react-native';
import { multiply, openCamera } from 'react-native-awesome-library';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>(0);
  const [firstNumber, setFirstNumber] = React.useState<number>(0);
  const [secondNumber, setSecondNumber] = React.useState<number>(0);

  const handleMultiply = () => {
    const first = Math.floor(Math.random() * 10);
    const second = Math.floor(Math.random() * 10);
    multiply(first, second).then(setResult);
    setFirstNumber(first);
    setSecondNumber(second);
  };

  const handleOpenCamera = () => {
    openCamera().then((image) => console.log(image));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textResult}>
        {firstNumber} * {secondNumber} = {result}
      </Text>

      <Pressable onPress={handleMultiply} style={styles.btnContainer}>
        <Text style={styles.textBtn}>Execute Native Calc</Text>
      </Pressable>

      <Pressable onPress={handleOpenCamera} style={styles.btnContainer}>
        <Text style={styles.textBtn}>Open Native Camera</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textResult: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  btnContainer: {
    marginTop: 40,
    backgroundColor: '#4aadff',
    padding: 10,
    borderRadius: 5,
  },
});
