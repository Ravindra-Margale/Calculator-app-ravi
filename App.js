
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleEqualPress = () => {
    try {
      const result = eval(input);
      setOutput(result.toString());
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.input}>{input}</Text>
        <Text style={styles.output}>{output}</Text>
      </View>

      {/* Button Section */}
      <View style={styles.buttons}>
        {[
          ['7', '8', '9', '/'],
          ['4', '5', '6', '*'],
          ['1', '2', '3', '-'],
          ['C', '0', '=', '+'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === '=' && styles.equalsButton,
                ]}
                onPress={() =>
                  button === 'C'
                    ? handleClear()
                    : button === '='
                      ? handleEqualPress()
                      : handleButtonPress(button)
                }
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Footer Section */}
      <Text style={styles.footer}>Calculator by Ravindra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
  },
  display: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
  },
  input: {
    fontSize: 24,
    textAlign: 'right',
    color: '#666',
  },
  output: {
    fontSize: 32,
    textAlign: 'right',
    color: '#000',
    marginTop: 10,
  },
  buttons: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: '22%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    elevation: 2,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 16,
    color: '#888',
  },
});