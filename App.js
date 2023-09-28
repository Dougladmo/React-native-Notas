import React, { useState } from "react";
import Title from "./components/Title/Title";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [result, setResult] = useState("Resultado...");

  const averageCalc = () => {
    const sum =
      parseFloat(num1) + parseFloat(num2) + parseFloat(num3) + parseFloat(num4);
    const average = sum / 4;
    if (average >= 7) {
      setResult(`Sua média foi: ${average}. Parabéns você passou!! 🎉`);
    } else {
      setResult(`Sua média foi: ${average}. Você ficou de recuperação. ☹️`);
    }
  };

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
    <View
      style={{
        backgroundColor: "#FFE4D6",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      <View style={styles.container}>
        <Title />
        <Text
          style={{
            marginBottom: 10,
            fontSize: 20,
            color: "white",
            color: "white",
          }}
        >
          Digite suas notas
        </Text>
          <TextInput
            style={styles.input}
            placeholder="Número 1"
            onChangeText={(text) => setNum1(text)}
            value={num1}
            keyboardType="numeric"
          />
        <TextInput
          style={styles.input}
          placeholder="Número 2"
          onChangeText={(text) => setNum2(text)}
          value={num2}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Número 3"
          onChangeText={(text) => setNum3(text)}
          value={num3}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="Número 4"
          onChangeText={(text) => setNum4(text)}
          value={num4}
          keyboardType="numeric"
          />
        <Button title="Somar" onPress={averageCalc} />
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
          </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    width: "300px",
  },
  container: {
    backgroundColor: "#B0578D",
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    width: 350,
    boxShadow: "5px 5px 10px #0000004d",
    borderRadius: "20px",
    paddingBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginTop: 5,
    marginBottom: 20,
    width: 200,
    height: 50,
    backgroundColor: "#ffffff",
    color: "#0000008d",
    borderRadius: "5px",
    border: "none",
  },
  result: {
    backgroundColor: "lightblue",
    marginTop: 30,
    padding: 20,
    fontSize: 16,
    borderRadius: "20px",
  },
});
